
# turns the orgTree and orgTypes into js files

use OpenSRF::AppSession;
use OpenSRF::System;
use JSON;
OpenSRF::System->bootstrap_client(config_file => "/pines/conf/bootstrap.conf");


my $ses = OpenSRF::AppSession->create("open-ils.search");
my $req = $ses->request("open-ils.search.actor.org_tree.slim.retrieve");
my $tree = $req->gather(1);

my $ses2 = OpenSRF::AppSession->create("open-ils.storage");
my $req2 = $ses2->request("open-ils.storage.direct.actor.org_unit_type.retrieve.all.atomic");
my $types = $req2->gather(1);


my $tree_string = JSON->perl2JSON($tree);
my $types_string = JSON->perl2JSON($types);

$tree_string =~ s/\"/\\\"/g;
$types_string =~ s/\"/\\\"/g;

$tree_string = "var globalOrgTree = JSON2js(\"$tree_string\");";
$types_string = "var globalOrgTypes = JSON2js(\"$types_string\");";

print "$tree_string\n\n$types_string\n";


$ses->disconnect();
$ses2->disconnect();
