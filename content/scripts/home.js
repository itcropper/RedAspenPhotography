
var Home = function(){};

Home.Extend(Module);


(function(){
    Home.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        var windowDimensions = {
            height : $(window).height()
        };
        
        this.$element.find(".rslides").responsiveSlides({
            timeout:5000
        });
        
        if(Galleria){
            Galleria.loadTheme('./scripts/behavior/libs/galleria.classic.js');
        }
        
        return this;
    }
})();

var home = new Home().init('.home-page');