var firstAnimationTime = 1000;
var panDist = 100;

window.onload = function() {
    //-----
    $("body").css("overflow","auto"); 
    $(".loader").hide();
    
    $('.head').viewportChecker({offset:150, callbackFunction: function(elem, action){b1A()}});
    $('.service').viewportChecker({offset:150, callbackFunction: function(elem, action){b2A()}});
    $('.host').viewportChecker({offset:250, callbackFunction: function(elem, action){b3A()}});
    $('.tariff').viewportChecker({offset:150, callbackFunction: function(elem, action){b4A()}});
    $('.contacts').viewportChecker({offset:150, callbackFunction: function(elem, action){b5A()}});
    $('.footer').viewportChecker({offset:50, callbackFunction: function(elem, action){b6A()}});

    panorObj(".starDR img", panDist)
    panorObj(".service_type_pic img:nth-child(2)", panDist)


    panorObj(".host_bg_rocket1", panDist)
    panorObj(".host_bg_rocket3", panDist)
    panorObj(".host_bg_sun", panDist, 0)
    panorObj(".host_bg_dog img", panDist, 0 )
     
}

function offsetYCalc(obj, offsetY){
    var objH = $(obj).height();
    var objY = $(obj).offset().top;
    var hideCoef = 20;

    if(offsetY > objY+100) return true
    else false
}



function b1A(){
    goTowP(".headBlock .request", -1)
    goTowP(".headBlock .menu", -1)

    

    $(".request>*, .menu_ul").css({"opacity": 0})

    setTimeout(function(){
        $(".logo").animate({opacity: 1}, firstAnimationTime, function(){})
        $(".headBlock .DogRocket").animate({"opacity": 1}, firstAnimationTime/2, function(){})
        $(".request>*, .menu_ul").animate({"opacity": 1}, firstAnimationTime/2, function(){})
    }, firstAnimationTime/2)
    
    
    setTimeout(shipGo, firstAnimationTime/3);
}

function b2A(){
    var xServ = $(".service_type").offset().left;

    $(".service_type_title .zag484 ").offset({left: -$(".service_type_title .zag484 ").width()-xServ}).css({"opacity": 1}).show(); 
    $(".service_type_img").css({"margin-right": -$(window).width()+$(".service_type_img").offset().left}).show(); 
    $(".srvice_line").hide() 
    

    var lW = $(".srvice_line").width(); $(".srvice_line").css({width: 0})

    $(".service_title").animate({opacity: 1}, firstAnimationTime, function(){})
    $(".service_type_num").animate({opacity: 1}, firstAnimationTime, function(){})
    $(".zag484").animate({"left": 0}, firstAnimationTime, function(){});
    $(".service_type_img").animate({"margin-right": 0}, firstAnimationTime, function(){

        $(".service_type_description").animate({opacity: 1}, firstAnimationTime, function(){})
        $(".srvice_line").show()
        $(".srvice_line").animate({"width": lW}, firstAnimationTime/2, function(){
            $(".srvice_line").removeAttr("style")
            $(".srvice_line").show();
        });
        
    })

}

function b3A(){
    $(".hostBlock").removeAttr("style")
    $(".host_bg_rocket1").css({"margin-top": $(".host").width()})
    $(".host_bg_rocket3 img").css({"margin-bottom": -$(".host").width()})
    $(".host_bg_sun").css({"opacity": 0})
    $(".host_bg_dog").rotate(90);
    $(".host_title").css({"opacity": 0})
    $(".circle_text_middle").css({"opacity": 0})
    $(".hostBlock").css({"opacity": 1})

    var diaL =  $(".dia_text").css("left")

    $(".dia_text").css({"left": $(window).width()-100})

    var ctW = $(".circle_pic").width()
    var ctT = $(".circle_pic").offset().top
    var ctL = $(".circle_pic").offset().left
    

    $(".circle_pic").width(0);
    $(".circle_pic").height(0);

    $(".circle_pic").offset({top: ctT+ctW/2, left: ctL+ctW/2})

    var cttH = $(".circle_text_top").height()
    var ctbH = $(".circle_text_bottom").height()

    $(".anim_el").css({"position": "absolute", "bottom": -130})

    $(".circle_text_top").css({"height": cttH})
    $(".circle_text_bottom").css({"height": ctbH})

    rotationController(".dia_pic")
    

    $(".host_bg_rocket1").animate({"margin-top": 0}, firstAnimationTime, function(){})
    $(".host_bg_rocket3 img").animate({"margin-bottom": 0}, firstAnimationTime, function(){})
    $(".host_bg_sun").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".host_title").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".host_bg_dog").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".circle_pic").animate({"width": ctW, "height": ctW, "top": 0, "left": 0}, firstAnimationTime, function(){})
    
    $(".dia_text").animate({"left": diaL}, firstAnimationTime, function(){
        $(".dia_text").removeAttr("style")
    })


        $(".host_bg_dog").rotate({"animateTo":0});

    

    

    setTimeout(function(){
         
         $(".host_bgLine_ring:nth-child(1)").css({
            "width": $(".host_bgLine_ring:nth-child(1) .img_rot").width(),
            "height": $(".host_bgLine_ring:nth-child(1) .img_rot").height()
        })

        rotationController(".host_bgLine_ring:nth-child(1)")    
        rotationController(".host_bgLine_ring:nth-child(2)")  
        rotationController(".host_bgLine_ring:nth-child(3)") 

        $(".circle_text_middle").animate({"opacity": 1}, firstAnimationTime, function(){})
        $(".anim_el").animate({"bottom": 0}, firstAnimationTime, function(){
            $(".anim_el").removeAttr("style")
        })
    }, firstAnimationTime/4)
}

function b4A(){
    var tleW = $(".tariff_list .el_inner").outerWidth() 
    var tleH = $(".tariff_list .el_inner").outerHeight() 
    var tl = $(".tariff_list").outerHeight() 
    
    $(".tariff_list").css({"opacity": 1})

    $(".tariff_list .el_inner").css({
        "position": "absolute", 
        "bottom": -tleH-tleH/3, 
        "height": tleH,
        "width": tleW
    })

    $(".tariff_list").css({ 
        "height": tl,
    })

    $(".tariff_check").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".tariff_title").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".slide_arrow").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".tariff_text").animate({"opacity": 1}, firstAnimationTime, function(){})
    

    setTimeout(function(){
        $(".tariff_list .tariff_list_el:nth-child(3) .el_inner").animate({"bottom": 0}, firstAnimationTime/1.3, "easeOutSine", function(){
            
        })
    }, 1)
    setTimeout(function(){
        $(".tariff_list .tariff_list_el:nth-child(2) .el_inner").animate({"bottom": 0}, firstAnimationTime/1.3, "easeOutSine", function(){})
    }, 200)
    setTimeout(function(){
        $(".tariff_list .tariff_list_el:nth-child(1) .el_inner").animate({"bottom": 0}, firstAnimationTime/1.3, "easeOutSine", function(){
            $(".tariff_list").removeAttr("style")
            $(".tariff_list .el_inner").removeAttr("style")
            $(".tariff_list .el_inner").css({"opacity":1})
            $(".tariff_list").css({"opacity":1})
            $(".tariff_list_smooth").hide()
            $(".tariff_list .el_inner").addClass("tariffElAnimate")
        })

        
    }, 400)

    setTimeout(function(){
        $(".slide_radio").animate({"opacity": 1}, firstAnimationTime, function(){})
    }, firstAnimationTime/1.5)

    
}

function b5A(){
    $(".cb_title").css({"opacity": 0})
    $(".contacts_block-map").css({"opacity": 0})
    $(".cb_text li").css({"opacity": 1})
    

    $(".cb_title").animate({"opacity": 1}, firstAnimationTime, function(){})
    $(".contacts_block-map").animate({"opacity": 1}, firstAnimationTime/1.5, function(){})

    setTimeout(function(){
        $(".cb_text li:nth-child(1) ").animate({"left": 0}, firstAnimationTime/1.3)
    }, 50)
    setTimeout(function(){
        $(".cb_text li:nth-child(2) ").animate({"left": 0}, firstAnimationTime/1.3)
    }, 200)
    setTimeout(function(){
        $(".cb_text li:nth-child(3) ").animate({"left": 0}, firstAnimationTime/1.3)
    }, 350)
}

function b6A(){
    $(".footer_anim").animate({"top": 0}, 1000)
}



function goTowP(obj, tow){
    
    
    $(obj).animate({left: 0}, firstAnimationTime, function(){
        $(obj).removeAttr("style")
        $(obj).css({"opacity": 1})
        $(".circle_text_top").removeAttr("style")
        $(".circle_text_bottom").removeAttr("style")
    })
}

function goTowW(obj, tow){
    $(obj).animate({left: 0}, firstAnimationTime, function(){
        $(obj).removeAttr("style")
        $(obj).css({"opacity": 1})
    })
}

function shipGo() {
    $(".DogRocket_img").css({"opacity": 1})
    $(".DogRocket_img").animate({"margin-bottom": 0}, firstAnimationTime/1.2, 'easeInOutCirc', function(){

    })

    $(".in_DrS").css({opacity: 0})

    

    setTimeout(function(){
        $(".in_DrS").animate({opacity: 1}, firstAnimationTime, function(){
        
        })
    },firstAnimationTime/2.5)
}

function panorObj(obj, dist, ma = 1){
    

    //$(obj).css({"margin-left": 100})

    /*$(document).keydown(function() {
        $(document).click(); 
    });
    
    $(document).mouseclick( function( event ) {
        console.log("1231231")
        //elTowMous(event)
    });*/
    $( document ).on( "mousemove", function( event ) {
        elTowMous(event)
    });

    function elTowMous(event){
        var x = event.pageX;
        var y = event.pageY;

        var nx = (x - $( document ).width()/2)/40;
        var ny = (y - $( document ).height()/2)/40;

        //console.log("X: " + nx + " Y: " + ny);
        //alert(nx);

        if(ma)
        $(obj).css({"margin-left": nx})
        else
        $(obj).css({"margin-right": -nx})
    }
}



    function rotationController(obj_r){
        var currRot = 180;
        var currStep = 0;

        var rotTime = 10000;
        var rotDelay = 10;

        var timePlus = rotTime/rotDelay/360;

        var idInt = setInterval(function(){
            
            currRot+=timePlus;
            var rotStepName = "eng_rot1";
            if(currStep == 1){
                rotStepName = "eng_rot2"
            }
            if(currRot > 360) currRot = 360;
            $(obj_r+" ."+rotStepName).css({"transform" : "rotate("+currRot+"deg)"})
            if(currRot == 360 && currStep == 1){clearInterval(idInt);}
            if(currRot == 360) {currRot = 180; currStep = 1 };
            

        }, rotDelay)
    }

