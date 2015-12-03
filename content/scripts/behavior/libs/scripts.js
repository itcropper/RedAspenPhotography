$(document).ready(function($) {
	"use strict";
	
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
    
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
	
	var siteToggle = function() {
		if ( windowWidth > 1199 ) {
			
			// Remove Styles
			$(".site-toggle, .site-header, .header-menu ul").removeAttr("style");
			
			// Remove Classes
			$(".header-menu li").removeClass("active");
			$("body").removeClass("sidebar-on");
			
		}
	};
	/*-- HEADER TOGGLE END--*/
    
    /*--- About Me ----*/
    $(window).one('album-loaded', function(){
        var $aboutMeImage = $('.about-me-img');
        $('<img src="/images/global/about-me.jpg" />').load(function(){
            $aboutMeImage.attr('src', "/images/global/about-me.jpg");
        });
    });
    
    
    
    /* -- Responsive Nav --*/
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
	
	
	
	/*-- BACK TOP --*/
	$(".site-back-top").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 0}, 800);
	});
	
	function backTop() {
		if ( $(window).scrollTop() > 40 && windowWidth > 480 ) {
			$(".site-back-top").fadeIn();
		}
		else{
			$(".site-back-top").fadeOut();
		}
	}
	/*-- BACK TOP END --*/
	
	/*-- GOOGLE MAP 1 --*/
//	$(".google-map-1").width("100%").height("330px").gmap3({
//		map:{
//			options: {
//			center:[39.9860562,-105.2399903],
//			zoom: 12,
//			scrollwheel: false,
//			mapTypeId: google.maps.MapTypeId.ROADMAP
//		}
//		},
//		marker:{
//			latLng:[39.9860562,-105.2399903]
//		}
//	});
	/*-- GOOGLE MAP 1 END --*/
	

    
    document.hideLoader = function(){
		$(".site-loader").delay(500).fadeOut("slow");
		backTop();
    }

    
	$(window).resize(function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
		siteToggle();
		backTop();
	});
	/*-- WINDOW RESIZE END --*/
});