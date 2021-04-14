(function($) {
    "use strict";
    $(document).ready(function() {
        $('#mobile-nav').meanmenu({
		 meanMenuContainer: '.basic-mobile-menu',
		 meanScreenWidth: "767"
	 });
    });

    $(window).on('load', function() {

    });
})(jQuery)