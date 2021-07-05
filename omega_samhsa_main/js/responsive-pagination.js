(function($) {
		
	$(window).resize(function(){
		if($(window).width() < 768)
			$('#mindbreeze-pager').html('<ul data-template="pagination" class="mindbreeze_pager_mobile"><a href="#" style="" class="mb-next mb-center mb-block action" data-action="this.nextPage({ append: true })" data-i18n="mobileclient_load_more_results">Load more results </a></ul>');
		else
			$('#mindbreeze-pager').html('<div data-template="pages" class="mindbreeze_pager_desktop"></div>');
	}).resize();
	
})(jQuery);