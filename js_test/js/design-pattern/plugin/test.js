/**
 * Created by sun-gah on 2017/7/27.
 */

// 创建在一个封闭环境中，闭包
;(function($){

    // 创建一个构造函数
    var Colorchange= function(el,opt) {
        this.$element=el,
        this.defaults={
            'color':'red',
            'fontSize':'12px',
            'textDecoration':'none'
        },
          this.options=$.extend({},this.defaults,opt)
    };
    // 添加原型方法
    Colorchange.prototype={
            changess:function(){
                return this.$element.css({
                   'color':this.options.color,
                    'fontSize':this.options.fontSize,
                    'textDecoration':this.options.textDecoration
                });
            }
    }
    $.fn.myPlugin = function(options){
        var colorchange=new Colorchange(this,options);
        return colorchange.changess();
    }

})(jQuery);