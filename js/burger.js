$(document).ready(function(){
    $('.nav-burger').click(function () {
        $('.wrapper').toggleClass('active-nav');
    });
    $('.nav-gallery-link').click(function () {
        $('.nav-gallery-dropdown').toggleClass('nav-gallery-active');
    });
});