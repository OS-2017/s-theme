!function(e,n,a){e.behaviors.omega_samhsa_main={attach:function(e,i){n(a).on("load",function(){}),n(a).resize(function(){}),n(a).scroll(function(){})}},n(document).ready(function(){n(".ebrc-featured-resources").click(function(){return a.location=n(this).find("a").attr("href"),!1}),n(function(){n("div.block-views-blockbup-physician-count-national-table--block-1 div.view-content").children().length>1&&n('input[value="Apply"]').click()})}),e.behaviors.filterAccordion={attach:function(){var e=n("fieldset[data-drupal-selector=edit-field-ebp-resource-type-target-id] legend"),i=n(".views-exposed-form div[data-drupal-selector=edit-field-ebp-portal-target-id]"),t=e.next(),o=n(a).width(),s=n("h2.search-results");o<=863&&(n(e).addClass("active").next().slideUp(),n(e).once().click(function(a){a.preventDefault(),i.css({"min-height":"270px"}),s.css({top:"450px"});var o=n(this).closest("div").find(t);n(this).closest(e).find(t).not(o).slideDown(),n(this).hasClass("active")?(n(this).removeClass("active"),n(i).css({"min-height":"450px"}),s.css({top:"630px"})):(n(this).closest(e).find(".active").removeClass("active"),n(this).addClass("active")),o.stop(!1,!0).slideToggle(0)}))}},e.behaviors.imageMaps={attach:function(e,a){n("img[usemap]").once("imageMaps").rwdImageMaps()}},n(document).ready(function(){n(function(){n("#dl-menu").dlmenu({animationClasses:{classin:"dl-animate-in-2",classout:"dl-animate-out-2"}}),n(".mobile-only").parent().addClass("mobile-only")});var e=a.location.pathname.split("/");e=e[e.length-1],void 0!==e&&n("ul.sf-menu, ul.sf-menu ul").find("a[href$='"+e+"']").parents("li").children("a").addClass("active")})}(Drupal,jQuery,this),!function(e,n,a){e.behaviors.omega_samhsa={attach:function(e,i){function t(){var e=n(a).width();e<l&&n("body").find(".block-mobile-hamburger-block .menu-toggle").length?n(".main-menu").addClass("collapsible"):e>=l&&n(".main-menu").removeClass("collapsible open animating")}function o(){var e=n(a).width();e<l&&!n("body").find(".side-menu .menu-toggle").length?(n(".side-menu > h2").prepend('<a class="menu-toggle" href="#" rel=”nofollow”><span class="menu-icon"></span>Menu</a>'),n(".side-menu").addClass("collapsible")):e>=l&&(n("body").find(".side-menu .menu-toggle").remove(),n(".side-menu").removeClass("collapsible open animating"))}function s(){var e=n(a).width();e<l&&n("body").find(".site-search .search-form-wrapper").length?n(".search-form-wrapper").appendTo(".region--preface-first"):e>=l&&n("body").find(".region--preface-first .search-form-wrapper").length&&n(".search-form-wrapper").prependTo(".head-search-wrapper")}var l=1e3;n(".field--name-field-section-link").hover(function(){n(".mega-menu-item .active").removeClass("active"),n(this).parent().addClass("active")}),n(".main-menu .paragraph--type--megamenu-data:nth-child(1)").addClass("active"),n("html").hasClass("touchevents")&&n(".main-menu .menu-item > a").once().click(function(e){!n(this).parent().hasClass("open")&&n(this).parent().find(".mega-menu-wrapper").length&&(e.preventDefault(),n(".main-menu .menu-item").removeClass("open"),n(this).parent().addClass("open"))}),n(".block-mobile-hamburger-block .menu-toggle").once().click(function(e){e.preventDefault(),n(".block-mobile-hamburger-block .menu-toggle, .main-menu").addClass("animating"),n(".main-menu").slideToggle().promise().done(function(){n(".main-menu.collapsible").removeAttr("style"),n(".block-mobile-hamburger-block .menu-toggle, .main-menu").removeClass("animating").toggleClass("open")})}),n("body").once().on("click",".side-menu .menu-toggle",function(e){e.preventDefault(),n(this).parents(".collapsible").addClass("animating").find("> .menu").slideToggle().promise().done(function(){n(this).parents(".collapsible").find("> .menu").removeAttr("style"),n(this).parents(".collapsible").removeClass("animating").toggleClass("open")})}),n("body").once("openfootermenus").on("click","#quicklinks-toggle-button",function(e){e.preventDefault(),n(".region--postscript-second").addClass("animating"),n(".postscript-menu-wrapper").slideToggle().promise().done(function(){n(".postscript-menu-wrapper").removeAttr("style"),n(".region--postscript-second").removeClass("animating").toggleClass("open")})}),n("#search-toggle").once("opensearch").click(function(e){e.preventDefault(),n(".search-form-wrapper").slideToggle().promise().done(function(){n(".search-form-wrapper").removeAttr("style").toggleClass("open")})}),n(e).find("body").once("mobileSearchPlacement").each(function(){t(),o(),s()}),n(a).on("load",function(){}),n(a).resize(function(){t(),o(),s()}),n(a).scroll(function(){})}}}(Drupal,jQuery,this);