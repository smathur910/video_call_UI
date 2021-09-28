$(document).ready(function () {
    $('.box1 > img').click(function () {
        var $getImages = $(this).attr('src');
        $('.call_section>img').attr('src', $getImages);
    });
});