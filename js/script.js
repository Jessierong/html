 // JavaScript Document
$(function() {
	//initial
	fixMenu();
	tabselect()
    //mobile support
 
})

/*//window resize
$(window).resize(function() {
	fixMenu();
});*/

function fixMenu(){
	var winWidth = $(window).width();
	if ( winWidth >= 320 ){
		var winHeight = $(window).height();
		var fixHeight = $(".fix").outerHeight();
		$(".scroll").height( winHeight - fixHeight );
	}
}
 
//tab select
function tabselect() {
    $(".menu li").click(function() {
        $(this).addClass("select").siblings().removeClass("select");
        var i = $(this).index();
        $("#detailTab>div").hide().parent().children().eq(i).show();
    }
    );
}
