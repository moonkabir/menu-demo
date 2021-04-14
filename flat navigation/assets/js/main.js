// ;(function($) {
//     "use strict";
//     $(document).ready(function() {
       
//     });

//     $(window).on('load', function() {

//     });
// })(jQuery)









$(".nav li").hover(function () {
	$(this).children("ul").stop().delay(200).animate({height: "toggle", opacity: "toggle"}, 200);
});