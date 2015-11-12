var Gallery = function(){};
Gallery.Extend(Module);

(function(){
    
    Gallery.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        return this;
    }
    
})();

var gallery = new Gallery().init("#works-detail");

