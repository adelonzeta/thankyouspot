$(document).ready(function () {
	$('.photoset-grid-lightbox').photosetGrid({
	  highresLinks: true,
	  rel: 'post-photos',
	  gutter: '2px',

	  onComplete: function(){
	    $('.photoset-grid-lightbox').attr('style', '');
	    $('.photoset-grid-lightbox a').colorbox({
	      photo: true,
	      scalePhotos: true,
	      maxHeight:'90%',
	      maxWidth:'90%'
	    });
	  }
	});
	
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