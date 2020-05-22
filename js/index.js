$(function() {
    $('.screenLock').css({
        height: $(document).height() + "px"
    });
    $('a.order-btn').click(function() {
        $(this).closest('form').submit();
        return false;
    });
    $('.close, .screenLock').click(function() {
        $('.screenLock').fadeOut(300);
    })
    $('.screenLock .msg').click(function(event) {
        event.stopPropagation();
    });
    var flag = true;
    $(window).mouseout(function(e) {
        if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
            $('.screenLock').fadeIn(300);
            flag = false;
        }
    });


    (function() {
        ymaps.ready(function(){
              jQuery('.city').text('г. ' + ymaps.geolocation.city).css('display', 'inline-block');
        });
    })();
});