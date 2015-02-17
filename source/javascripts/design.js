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
	
	$(window).resize(function(){
	    $('.photoset-grid-basic').photosetGrid();
	});
	
	$(".edit-profile").click(function () {
		var calculated_height = $(document).height();
		$(".profile-editing-overlay").show().height(calculated_height + 70);
		$(".header-photo").addClass("editing");
		$(".profile-photo").css({
			"position": "relative",
			"z-index": "999999"
		});
		$(".saved-view").hide();
		$(".editing-view").show();
		$(".editing-name").focus();
		$(".editing-cover-overlay").show();
		$(".editing-cover-button").show();
		$(".profile header").css("padding", "180px 0 0");
		$(".editing-photo").show();
		$(".navbar").css("z-index","9999999");
		$(".nav-overlay").show();
	});
	
	$(".cancel-editing").click(function () {
		$(".profile-editing-overlay").hide();
		$(".header-photo").removeClass("editing");
		$(".profile-photo").removeAttr("style");
		$(".saved-view").show();
		$(".editing-view").hide();
		$(".editing-cover-overlay").hide();
		$(".editing-cover-button").hide();
		$(".profile header").removeAttr("style");
		$(".editing-photo").hide();
		$(".navbar").removeAttr("style");
		$(".nav-overlay").hide();
	});
});