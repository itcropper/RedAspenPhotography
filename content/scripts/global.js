

var guid = function(){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

var time = 0;
var interval = setInterval(function(){
    if(time += 100 > 10000){
        clearInterval(interval);   
    }
    if(time += 100 > 10000 || document.getElementsByClassName("nav-collapse").length){
        clearInterval(interval);
        var navigation = responsiveNav(".nav-collapse", {
            animate: true,                    // Boolean: Use CSS3 transitions, true or false
            transition: 284,                  // Integer: Speed of the transition, in milliseconds
            label: "Menu",                    // String: Label for the navigation toggle
            insert: "after",                  // String: Insert the toggle before or after the navigation
            customToggle: "",                 // Selector: Specify the ID of a custom toggle
            closeOnNavClick: true,           // Boolean: Close the navigation when one of the links are clicked
            openPos: "relative",              // String: Position of the opened nav, relative or static
            navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
            navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
            jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
            init: function(){},               // Function: Init callback
            open: function(){},               // Function: Open callback
            close: function(){}               // Function: Close callback
          });
    }

}, 100);

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

$(document).ready(function(){
    $('.load-image').each(function(e){
        var $this = $(this),
            src = $this.data('src'),
            url = "",
            $parent = $this.parent(),
            width = $parent.width();
        
        var count = 0;
        while(!width && count++ < 3){
            $parent = $this.parent();
            width = $parent.width();
        }
        if(!width){
            width = $(window).width();
        }
        
        url = src.format("c_scale,w_" + width);
        
        if (url) {
            var img = new Image();
            img.style.display = "none";
            img.onload = function() {
                $(this).fadeIn(1000);
            };
            $this.replaceWith(img);
            $(img).addClass('img');
            img.src = url;
        }
    });
});


$.fn.await = function(maxTime, $el, fn){
    var counter = new Date(new Date().getTime() + maxTime);
    var interval = setInterval(function(){
        if(new Date().getTime() > counter.getTime()){
            clearInterval(interval);
        }
        if($(this).find($el).length){
            clearInterval(interval);
            fn($($el));
        }
    }, 1000);
};
	
(function(){
    var menuResize = function() {
        if ( window.innerWidth > 1199 ) {

            // Remove Mobile Menu Events
            $(".header-menu *").unbind();

            // Actions Desktop
            $(".header-menu .sub").hoverIntent({
                timeout: 100, // milliseconds delay before onMouseOut
                over: function(){
                    $(this).addClass("active");
                    $(this).children("ul").slideDown("fast");
                }, 
                out: function(){
                    $(this).removeClass("active");
                    $(this).children("ul").slideUp("fast");
                }
            });
        }
        else {

            // Remove Desktop Menu Events
            $(".header-menu *").unbind();

            // Actions Mobile
            $(".header-menu .sub > a").click(function(e){
                e.preventDefault();

                $(".header-menu li ul").slideUp("normal");
                $(".header-menu li").removeClass("active");

                var element = $(this).siblings("ul");

                if ( element.is(":visible") ) {
                    element.slideUp("normal");
                    $(this).parent().removeClass("active");
                }
                else {
                    element.slideDown("normal");
                    $(this).parent().addClass("active");
                }
            });
        }
    };
    menuResize();
    $(window).on('resize', menuResize);
})();

$(".site-toggle").click(function(e){
    e.preventDefault();

    var menu = $(".site-header");
    var button = $(".site-toggle");

    if( $(menu).is(":visible") ) {
        $(menu).animate({ "left": "-200px" }, 200, function(){
            $(menu).hide();
            $("body").removeClass("sidebar-on");
        });
        $(button).animate({ "left": "0px" }, 200);
    }
    else {
        $("body").addClass("sidebar-on");
        $(menu).show();
        $(menu).animate({"left": "0px"}, {duration: 200, queue: false});
        $(button).animate({"left": "200px"}, {duration: 200, queue: false});
    }
});
