
var Contact = function(){};

Contact.Extend(Module);


(function(){
    Contact.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        var $submit = this.$element.find('.data-form button:submit');
        
        var $form = this.$element.find('.data-form form');
        
        $form.find('input, textarea').on('focus', function(){
           $(this).css({"border-color": "black", "color": "black"});
        });
        
        $submit.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            
            var emptyVal = false;

            $form.find('input, textarea').each(function(e){
                if($(this).val() == "" || $(this).val() == "required"){
                    emptyVal = true;
                    $(this).css({"border-color": "red", "color": "red"});
                    $(this).val("required");
            }else{
                    $(this).css({"border-color": "black", "color": "black"});
                }
            });
            
            if(!$('[name="email"]').is(":valid")){
                $('[name="email"]').css({"border-color": "red", "color": "red"});
                $('[name="email"]').val("invalid email address");
                return;
            }

            if(emptyVal){
                return;
            }            
            
            var data = $form.find('input, textarea').serialize();
            $.ajax({
                url: './contact',
                data: JSON.stringify({
                    name: $form.find('[name="name"]').val(),
                    email: $form.find('[name="email"]').val(),
                    message: $form.find('[name="message"]').val(),
                }),
                method: "POST",
                contentType:"application/json; charset=utf-8",
            }).done(function(res){
                $('#myModal').modal();
                $submit.attr('disabled', true);
            });
        });
        return this;
    }
})();

var contact = new Contact().init('#contact');