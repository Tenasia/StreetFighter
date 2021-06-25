$(document).ready(function() {

    $('.ryu').mouseenter(function() {


            $('.ryu-still').hide();
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-still').show();
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' },
                500,
                function() {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '520px');
                }
            );

        })
        .mouseup(function() {
            $('.ryu-ready').show();
            $('.ryu-throwing').hide();

        });

    $('ryu').keypress(function(event) {
        if (event.which == 88) {
            event.preventDefault();

            $('.ryu-still').hide();
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
        }

    });


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

var xTriggered = 0;
$(document).keydown(function(event) {
    if (event.which == 88) {
        xTriggered++;
        $('.ryu-still').hide();
        $('.ryu-cool').show();
        $('.ryu-ready').hide();
    }


    // var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
    // alert(msg);
});

var xTriggered = 0;
$(document).keyup(function(event) {
    if (event.which == 88) {
        xTriggered++;
        $('.ryu-still').show();
        $('.ryu-cool').hide();
        $('.ryu-ready').hide();
    }


    // var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
    // alert(msg);
});