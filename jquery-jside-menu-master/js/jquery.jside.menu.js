(function($){
     $.fn.jSideMenu = function(options){
    var setting = $.extend({
   		   jSidePosition: "position-left", //possible options position-left or position-right 
           jSideSticky: true, // menubar will be fixed on top, false to set static
           jSideSkin: "default-skin", // to apply custom skin, just put its name in this string
           
		   jSideTransition: 400, //Define the transition duration in milliseconds 
  
  		   }, options);
  
  return this.each(function() {
  var jSide, target, headHeight, devHeight, arrow;   
   
        target = $(this);
		
//Accessing DOM
  jSide = $(".menu-container, .menu-head");
  devHeight = $(window).height();
  headHeight = $(".menu-head").height();
  dHeading = $(".dropdown-heading");
  menuTrigger = $(".menu-trigger");
  arrow = $("<i></i>");
  
// Set the height of side menu according to the available height of device
$(target).css({
    'height' : devHeight-headHeight,

});

    if (setting.jSideSticky == true){
     $(".menubar").addClass("sticky");
}  else{
     $(".menubar").removeClass("sticky");
   }

$(".menubar").addClass(setting.jSideSkin);
 $(jSide).addClass(setting.jSideSkin).addClass(setting.jSidePosition);

   if ($(jSide).hasClass("position-left")){
$(".menu-trigger").addClass("left").removeClass("right");
     }
  else{
$(".menu-trigger").removeClass("left").addClass("right");
   }

//Dropdown Arrow
    $(arrow).addClass("material-icons d-arrow").html("keyboard_arrow_down").appendTo(dHeading);
//Dropdowns
$(dHeading).click(function(){
   $(this).parent().find("ul").slideToggle(setting.jSideTransition);
   $(this).find(".d-arrow").toggleClass("d-down");
    
 });

$(menuTrigger).click(function(){
   $(jSide).toggleClass("open");
   $(".menu-body").removeClass("visibility");
});

//close menu if user click outside of it
   $(window).click(function(e) {
    if ($(e.target).closest('.menu-trigger').length){
     return;}
    if ($(e.target).closest(jSide).length){
     return;}
    
 $(jSide).removeClass("open");
 $(".menu-body").addClass("visibility");
      });
   });
 };

})(jQuery);
