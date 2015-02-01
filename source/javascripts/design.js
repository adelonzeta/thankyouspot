$(document).ready(function () {
	// Post Photo-Grid
	$('.photoset-grid-basic').photosetGrid();
	
	// Activate Bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Post Comments
	$(".post .comments textarea").focus(function () {
		$(this).attr("rows","3").siblings().attr("style","display: inline-block;");
		$(this).parent().siblings().attr("style","display: table-cell;");
	}).blur(function () {
		$(this).siblings(".btn").hide();
		$(this).parent().siblings(".media-left").hide();
		$(this).attr("rows","1");
	});
	$(".post .comments .btn-default").click(function () {
		$(this).hide();
		$(this).siblings(".btn").hide();
		$(this).parent().siblings(".media-left").hide();
		$(this).siblings("textarea").attr("rows","1");
		return false;
	});
	
	// NavBar Searchbox
	$(".navbar div.navbar-collapse").on('click',function(e){
	    if(e.target != this) return;
	    $(".navbar input").focus();
	});
});