(function (Drupal, $, window) {
  Drupal.behaviors.omega_samhsa_main = {
    attach: function (context, settings) {

      // Execute code once the DOM is ready.
      //----------------------------------------------------------------------------------------------



      // Execute code once the window is fully loaded.
      //----------------------------------------------------------------------------------------------
      $(window).on('load', function () {

      });


      // Execute code when the window is resized.
      //----------------------------------------------------------------------------------------------
      $(window).resize(function () {

      });


      // Execute code when the window scrolls.
      //----------------------------------------------------------------------------------------------
      $(window).scroll(function () {

      });

    }
  };
    $(document).ready(function() {
        // Featured resources card.
        $('.ebrc-featured-resources').click(function () {
            window.location = $(this)
                .find('a')
                .attr('href');
            return false;
        });
      // Click the "Apply" button to fix data values on MAT page.
      $(function () {
        if ($('div.block-views-blockbup-physician-count-national-table--block-1 div.view-content').children().length > 1) {
          $('input[value="Apply"]').click();
        }
      });
    });

// EBPRC filter accordion.
    Drupal.behaviors.filterAccordion = {
        attach: function () {
            var resourceLabel = $('fieldset[data-drupal-selector=edit-field-ebp-resource-type-target-id] legend');
            var resourcePortal = $('.views-exposed-form div[data-drupal-selector=edit-field-ebp-portal-target-id]');
            var resourceContent = resourceLabel.next();
            var windowWidth = $(window).width();
            var results = $('h2.search-results');
            // For iPad & smaller devices.
            if (windowWidth <= 863) {
                $(resourceLabel).addClass('active').next().slideUp();
                $(resourceLabel).once().click(function (e) {
                    e.preventDefault();
                    resourcePortal.css({'min-height': 270 + 'px'});
                    results.css({top: 450 + 'px'});
                    var dropDown = $(this).closest('div').find(resourceContent);
                    $(this).closest(resourceLabel).find(resourceContent).not(dropDown).slideDown();
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(resourcePortal).css({ 'min-height': 450+ 'px'});
                        results.css({top: 630 + 'px'});
                    }
                    else {
                        $(this).closest(resourceLabel).find('.active').removeClass('active');
                        $(this).addClass('active');
                    }
                    dropDown.stop(false, true).slideToggle(0);
                });
            }
        }
    };

    //

  //Responsive image maps
  Drupal.behaviors.imageMaps = {
		  attach: function (context, settings) {
			  $('img[usemap]').once('imageMaps').rwdImageMaps();
		  }
  };

  // execute mobile menu
  $(document).ready(function(){
	$(function() {
		$('#dl-menu').dlmenu({
			animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
		});
		$( ".mobile-only" ).parent().addClass( "mobile-only" );
	});
// execute menu active path
	var path = window.location.pathname.split('/');
	path = path[path.length - 1];
	if (path !== undefined) {
		$("ul.sf-menu, ul.sf-menu ul")
			.find("a[href$='" + path + "']") // gets all links that match the href
			.parents('li') // gets all list items that are ancestors of the link
			.children('a') // walks down one level from all selected li's
			.addClass('active');
	}
// More Like this section responsive tabs
});

} (Drupal, jQuery, this));

! function(e, n, a) {
    e.behaviors.omega_samhsa = {
        attach: function(e, o) {
            function i() {
                var e = n(a).width();
                e < l && n("body").find(".block-mobile-hamburger-block .menu-toggle").length ? n(".main-menu").addClass("collapsible") : e >= l && n(".main-menu").removeClass("collapsible open animating")
            }

            function s() {
                var e = n(a).width();
                e < l && !n("body").find(".side-menu .menu-toggle").length ? (n(".side-menu > h2").prepend('<a class="menu-toggle" href="#" rel=”nofollow”><span class="menu-icon"></span>Menu</a>'), n(".side-menu").addClass("collapsible")) : e >= l && (n("body").find(".side-menu .menu-toggle").remove(), n(".side-menu").removeClass("collapsible open animating"))
            }

            function t() {
                var e = n(a).width();
                e < l && n("body").find(".site-search .search-form-wrapper").length ? n(".search-form-wrapper").appendTo(".region--preface-first") : e >= l && n("body").find(".region--preface-first .search-form-wrapper").length && n(".search-form-wrapper").prependTo(".head-search-wrapper")
            }
            var l = 1000;
            n(".field--name-field-section-link").hover(function() {
                n(".mega-menu-item .active").removeClass("active"), n(this).parent().addClass("active")
            }), n(".main-menu .paragraph--type--megamenu-data:nth-child(1)").addClass("active"), n("html").hasClass("touchevents") && n(".main-menu .menu-item > a").once().click(function(e) {
                !n(this).parent().hasClass("open") && n(this).parent().find(".mega-menu-wrapper").length && (e.preventDefault(), n(".main-menu .menu-item").removeClass("open"), n(this).parent().addClass("open"))
            }), n(".block-mobile-hamburger-block .menu-toggle").once().click(function(e) {
                e.preventDefault(), n(".block-mobile-hamburger-block .menu-toggle, .main-menu").addClass("animating"), n(".main-menu").slideToggle().promise().done(function() {
                    n(".main-menu.collapsible").removeAttr("style"), n(".block-mobile-hamburger-block .menu-toggle, .main-menu").removeClass("animating").toggleClass("open")
                })
            }), n("body").once().on("click", ".side-menu .menu-toggle", function(e) {
                e.preventDefault(), n(this).parents(".collapsible").addClass("animating").find("> .menu").slideToggle().promise().done(function() {
                    n(this).parents(".collapsible").find("> .menu").removeAttr("style"), n(this).parents(".collapsible").removeClass("animating").toggleClass("open")
                })
            }), n("body").once("openfootermenus").on("click", "#quicklinks-toggle-button", function(e) {
                e.preventDefault(), n(".region--postscript-second").addClass("animating"), n(".postscript-menu-wrapper").slideToggle().promise().done(function() {
                    n(".postscript-menu-wrapper").removeAttr("style"), n(".region--postscript-second").removeClass("animating").toggleClass("open")
                })
            }), n("#search-toggle").once("opensearch").click(function(e) {
                e.preventDefault(), n(".search-form-wrapper").slideToggle().promise().done(function() {
                    n(".search-form-wrapper").removeAttr("style").toggleClass("open")
                })
            }), n(e).find("body").once("mobileSearchPlacement").each(function() {
                i(), s(), t()
            }), n(a).on("load", function() {}), n(a).resize(function() {
                i(), s(), t()
            }), n(a).scroll(function() {})
        }
    }
}(Drupal, jQuery, this);

