$('.next').on('click', function () {
    event.preventDefault();
    $('.subscription-step-2').show();
    $('.subscription-step-1').hide();
});

$('.prev').on('click', function () {
    event.preventDefault();
    $('.subscription-step-2').hide();
    $('.subscription-step-1').show();
});

$('.unsubscribe').on('click', function () {
    $('.popup-wrapp, .popup-one').addClass('active');
});

$('.close-popup').on('click', function () {
    $('.popup-wrapp').removeClass('active');
});

$('.unsubscribe-two').on('click', function () {
    $('.popup-one').removeClass('active');
    $('.popup-two').addClass('active');
});
