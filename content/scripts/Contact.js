
var Contact = function(){};

Contact.Extend(Module);


(function(){
    Contact.prototype.init = function($el){
        Module.prototype.init.call(this, $el);
        
        var $submit = this.$element.find('.data-form button:submit');
        
        var $form = this.$element.find('.data-form form');
        
        $submit.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
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
                 $form.find('textarea').val(res);
            });
        });
        
    }
})();

var contact = new Contact().init('#contact');