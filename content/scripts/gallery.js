var Gallery = function(){};
Gallery.Extend(Module);

(function(){
    
    Gallery.prototype.init = function($el){
        debugger;
        if($("#works-detail").length === 0){
         return ;   
        }
        Module.prototype.init.call(this, $el);
        
        //$('.site-loader').css('display', "block");
        
        var colSize = parseInt($(window).width() / 3),
            $grid = null;
        
        $('.grid-item').css({width: colSize, padding: 0, margin:0 });
        
        var imagecount = 0,
            imageLoadedCount = 0;
        $('.grid-load-image').each(function(e){
            var $this = $(this),
                src = $this.data('src'),
                url = src.format("c_scale,w_" + colSize);

            if (url) {
                var img = new Image();
                img.style.display = "none";
                img.onload = img.onerror = function() {
                    $(this).fadeIn(1000);
                    if(imagecount === ++imageLoadedCount){
                        $grid = $('.grid').masonry({
                          // options...
                          itemSelector: '.grid-item',
                          columnWidth: colSize
                        });
                        
                        $('.site-loader').hide('fast');
                    }
                };
                $this.replaceWith(img);
                $(img).addClass('img');
                $(img).css("width", colSize);
                img.src = url;
                imagecount++;
            }
        });
                

        
        return this;
    }
    
})();

var gallery = new Gallery().init("#works-detail");

