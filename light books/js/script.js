jQuery(document).ready(function() {
    $('#mc-embedded-subscribe-form').submit(function() {

        $('#mce-Name').html('Name');
        $('#mce-Email').html('Email');
        $('#mce-Domain').html('Domain');
        $('#mce-Site').html('Site');

        var postdata = $('#mc-embedded-subscribe-form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage == '' && json.emailMessage == '' && json.domainNameMessage == '' && json.currentSiteHostedMessage == '') {
                    $('#mc-embedded-subscribe-form').fadeOut('fast', function() {
                        $('#subscribe-form').append('<p id="Sent-text">Thanks for contacting us! We will get back to you very soon.</p>');
                    });
                }
            }
        });
        return false;
    });
});