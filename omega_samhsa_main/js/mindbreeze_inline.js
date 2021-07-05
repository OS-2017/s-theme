(function($) {
	Mindbreeze.require(["client/application"], function (Application) {
        var application = new Application({
          queryURLParameter: "k",
          rootEl: document.getElementById("searchform"),
          startSearch: false
        });

        window.search = function () {
          var searchQuery = document.getElementById("searchQuery").value;
          //you need this only if you add the searchbox on the searchpage as well
          //Now the redirect will be on the current website (window.location.href) ==> If you search on the search website the redirect should be to the searchwebsite as well.
          window.location.href = "?k=" + encodeURIComponent(searchQuery);
        }
	})

})(jQuery);