/* Mobile Nav */
$(document).ready(function(){
	$('#mobile_nav').change(function() {
        location.href = $(this).val();
    });
    $('.livechat').click(function(event){
		event.preventDefault();
		window.open('https://server.iad.liveperson.net/hc/33878321/?cmd=file&file=visitorWantsToChat&site=33878321','','height=500,width=600,scrollbars=no,status=no');
	});
});

/* Back Top */
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#back_top').fadeIn();
		} else {
			$('#back_top').fadeOut();
		}
	});
	$('#back_top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});