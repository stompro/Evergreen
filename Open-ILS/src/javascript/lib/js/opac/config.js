/* Export some constants  ----------------------------------------------------- */

/* URL params */
var PARAM_TERM					= "term";		/* search term */
var PARAM_STYPE				= "stype";		/* search type */
var PARAM_LOCATION			= "location"	/* current location */;
var PARAM_DEPTH				= "depth";		/* search depth */
var PARAM_FORM					= "format";		/* search format */
var PARAM_OFFSET				= "offset";		/* search offset */
var PARAM_COUNT				= "count";		/* hits per page */
var PARAM_HITCOUNT			= "hitcount";	/* hits per page */
var PARAM_RANKS				= "hitcount";	/* hits per page */
var PARAM_MRID					= "mrid";		/* metarecord id */
var PARAM_RID					= "rid";			/* metarecord id */

/* cookies */
var PARAM_SEARCHBAR_EXTRAS	= "searchbar_extras"

/* these are the actual param values - set on page load */

/* pages */
var MRESULT		= "mresult";
var RRESULT		= "rresult";
var MYOPAC		= "myopac";
var ADVANCED	= "advanced";
var HOME			= "home";
var PREFS		= "prefs";


/* ---------------------------------------------------------------------------- */
/* Set up ID's and CSS classes */
/* ---------------------------------------------------------------------------- */

var config = {};
config.text = {};
config.ids = {};
config.names = {};

config.ids.loading	= "loading_div";
config.ids.canvas		= "canvas";	
config.ids.canvas_main		= "canvas_main";	

config.css = {};
config.css.hide_me = "hide_me";

config.page = {};
config.page[HOME]		= "/webxml/index.xml";
config.page[ADVANCED]	= "/webxml/advanced.xml";
config.page[MRESULT]	= "/webxml/mresult.xml";
config.page[RRESULT]	= "/webxml/rresult.xml";
config.page[PREFS]		= "/webxml/webprefs.xml"
config.page[MYOPAC]		= "/webxml/myopac/index.xml"


/* mresult */
config.ids.mresult = {};

/* result */
config.ids.result = {};
config.css.result = {};
config.names.result = {};
config.ids.result.offset_start	= "offset_start";
config.ids.result.offset_end		= "offset_end";
config.ids.result.result_count	= "result_count";
config.ids.result.next_link		= 'next_link';
config.ids.result.prev_link		= 'prev_link';
config.ids.result.home_link		= 'home_link';
config.ids.result.end_link			= 'end_link';
config.ids.result.main_table		= 'result_table';
config.ids.result.row_template	= 'result_table_template';
config.ids.result.num_pages		= 'num_pages';
config.ids.result.current_page	= 'current_page';
config.css.result.nav_active		= "nav_link_active";
config.ids.result.top_div			= "result_table_div";
config.ids.result.nav_links		= "search_nav_links";
config.names.result.item_jacket	= "item_jacket";
config.names.result.item_title	= "item_title";
config.names.result.item_author	= "item_author";
config.names.result.counts_row	= "counts_row";
config.names.result.count_cell	= "copy_count_cell";

config.ids.login = {};
config.css.login = {};
config.ids.login.box = "login_box";
config.ids.login.username	= "login_username";
config.ids.login.password	= "login_password";
config.ids.login.button		= "login_button";



/* searchbar ids and css */
config.ids.searchbar = {};
config.css.searchbar = {};
config.ids.searchbar.text				= 'search_box';	
config.ids.searchbar.submit			= 'search_submit';	
config.ids.searchbar.type_selector	= 'search_type_selector';
config.ids.searchbar.depth_selector	= 'depth_selector';
config.ids.searchbar.form_selector	= 'form_selector';
config.ids.searchbar.extra_row		= 'searchbar_extra';
config.ids.searchbar.main_row			= 'searchbar_main_row';
config.ids.searchbar.table				= 'searchbar_table';
config.ids.searchbar.tag				= 'search_tag_link';
config.ids.searchbar.tag_on			= 'searchbar_tag_on';
config.ids.searchbar.tag_off			= 'searchbar_tag_off';


/*  sidebar */
config.ids.sidebar = {};
config.css.sidebar = {};
config.css.sidebar.item = {};
config.ids.sidebar.home				= 'home_link_div';
config.ids.sidebar.advanced		= 'advanced_link_div';
config.ids.sidebar.myopac			= 'myopac_link_div';
config.ids.sidebar.prefs			= 'prefs_link_div';
config.css.sidebar.item.active	= 'side_bar_item_active';
config.ids.sidebar.mresult			= 'mresult_link_div';
config.ids.sidebar.rresult			= 'result_link_div';
config.ids.sidebar.login			= 'login_link';


