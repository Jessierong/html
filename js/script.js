 // JavaScript Document
$(function() {
	
	//initial
    tabselect();
    PageMenu();
    LanguageMenu();
	shadowClose();
	
    //mobile support
    taptouch();

    //plugin 
    iCheck();
    $(".fancybox").fancybox();
    $('.datepicker').pickadate()
})

//window resize
$(window).resize(function() {
	toggleShadowMobile()
});

//header fix or not
$(window).scroll(function() {
    //You've scrolled this much:
    var scrollHeight = $(window).scrollTop();
    var hearderHeight = $(".header").height();
    if (scrollHeight > hearderHeight) {
        $(".header").addClass("headfixed");
        $("#allPart").css("padding-top", hearderHeight)
    } 
    else {
        $(".header").removeClass("headfixed");
        $("#allPart").css("padding-top", 0)
    }
});
 
//tab select
function tabselect() {
    $(".tabbox h2").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        var i = $(this).index();
        $(".tabcontainer>div").hide().parent().children().eq(i).show();
    }
    );
}

//slide up donw
//menu page
function slideTogglePage() {
    $(".page").slideToggle();
	if ($(document).width() <= 480) {
		$(".shadow-mobile").fadeToggle();
	}
}

function shadowClose(){
	$(".shadow-mobile").click(function(){
		$(".page").slideUp();
		$(".shadow-mobile").fadeOut();
	})
}

function toggleShadowMobile(){
    if ($(document).width() <= 480 && $(".page").css("display") == "block") {
        $(".shadow-mobile").show();
    } else 
    {
        $(".shadow-mobile").hide();
    }
}
//menu language
function slideToggleLanguage() {
    $(".language").slideToggle();
}

//menu page
function PageMenu() {
    $(".page li").click(function() {
        $(".page li").removeClass("selected");
        $(this).addClass("selected");
    })
}
//menu language
function LanguageMenu() {
    $(".language li, .language-login li").click(function() {
       $(this).parent().find("li").removeClass("selected").addClass("gray");
		$(this).addClass("selected").removeClass("gray");
    })
}

//add touch effect on element
function taptouch() {
    $('.form li, .button').live('touchstart', function(e) {
        $(this).addClass('active');
    });
    $('.form li, .button').live('touchend', function(e) {
        $('li, .button').removeClass('active');
    });
}

//icheck style initial
function iCheck() {
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-orange',
        radioClass: 'iradio_flat-orange'
    });
}
