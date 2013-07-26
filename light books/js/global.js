$(document).ready(function() {
	$('#chatday').hide();
	// $('#chatday').hide().delay(1500).slideDown('slow');
	if(!Modernizr.svg) {
    	var images = $('img[data-png-fallback]');
    	images.each(function(i) {
      		$(this).attr('src', $(this).data('png-fallback'));
    	});
  	}
	$('#intro-headline').fitText(1.5, { minFontSize: '32px' });
	$('#site_themes a').click(function() {
		$('#site_themes a').removeClass('current');
		$(this).addClass('current');
		var src = $(this).attr('href');
		if (src != $('img#site_theme').attr('src')) {
			$('img#site_theme').stop().animate({opacity:'0'}, function() {
				$(this).attr('src',src);
			}).load(function() {
				$(this).stop().animate({opacity:'1'});
			});
		}
		return false;
	});
	$('#lib_feat').hide();
	$('#lib_feat_toggle').click(function() {
		$('#lib_feat').slideToggle('slow');
		$(this).fadeOut();
		return false;
	});
	$('#site_feat').hide();
	$('#site_feat_toggle').click(function() {
		$('#site_feat').slideToggle('slow');
		$(this).fadeOut();
		return false;
	});
	$('#beta_badge').click(function() {
		$.scrollTo(this.hash, 1000, {easing:'swing'} );
		return false;
	});
	$('#intro_click').click(function() {
		$.scrollTo(this.hash, 1000, {easing:'swing'} );
		return false;
	});
    var hasHash = window.location.hash.length > 0,
        docHeight = $(document).height(),
        offset = 0,
        timer;
    if ( hasHash ) {
        window.setTimeout(function() {
            timer = window.setInterval(function() {
              if ( docHeight != $(document).height() ) {
                clearInterval(timer);
                window.setTimeout(function() {
                    $(document).scrollTop( $('a[name="' + window.location.hash.replace('#','') + '"]').offset().top - offset )
                },100);
              }
            },10);
        },10);
    }
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34430385-1']);
_gaq.push(['_setDomainName', 'koken.me']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();