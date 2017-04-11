     
        $(function(){
            
            
               
        
        //jquery form validator
        
        $("#contactForm").validate({
           rules:{
              fname:{
                  required:true,
                  minlength:4
              },
               email:"required",
               phone:{
                   required:true,
                   number:true,
                   minlength:11
               },
               textarea:"required"
           },
            messages:{
           fname:{
                  required:"type your full name",
                  minlength:"please type minimum 4 latter"
              },
              email:{
                  required:"type your email address",
                  email:"Please type a valid email address."
              },
               phone:{
                   required:"type your phone number",
                   number:"only numbers",
                   minlength:"please type minimum 11 digits"
               },
                textarea:{
                    required:"write somethings"
                }
        }
        });
        
        //jquery form validator
        
        
        
        //fake loader
        
         $("#fakeLoader").fakeLoader({
             timeToHide:1500, //Time in milliseconds for fakeLoader disappear
        zIndex:999, // Default zIndex
        spinner:"spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#42B061", //Hex, RGB or RGBA colors
         });
        
        //fake loader
        
        //parallax effect
        
        $(".bg-img").parallax("50%",0.2);
        //parallax effect
        
        //counter js
        
         if ($(".stats [data-to]").length>0) {
            $(".stats [data-to]").each(function() {
                var stat_item = $(this),
                offset = stat_item.offset().top;
                if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                };
                $(window).scroll(function() {
                    if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                        stat_item.addClass('counting');
                        stat_item.countTo();
                    }
                });
            });
        };
  
        
        //counter js
        
        
        
            
             new WOW().init();
            
            
          /**  easing plugin **/
            $('.nav li a,.arrow').bind('click', function(event) {
        var $anchor=$(this);
        $('html, body').stop().animate( {
            scrollTop: $($anchor.attr('href')).offset().top
        }
        , 1500, 'easeOutCirc');
        event.preventDefault();
    }
    );
           /**  easing plugin **/
              
       
            //nice scroll
            
            $("html").niceScroll();
            
            //nice scroll
            
            
         })
        
     //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 300) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('.arrow').show("slow", function() {
                    $('.arrow').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('.arrow').hide("slow", function() {
                    $('.arrow').css({
                        display: 'none'
                    });
                });
            }
        }
    });
       