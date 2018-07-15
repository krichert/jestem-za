$(document).ready(function () {
    checkFixedHeader();

    $(window).scroll(checkFixedHeader);

    function checkFixedHeader() {
        $scrollPosition = $(this).scrollTop();
        $windowHeight = $(this).height();
        $navbarElement = $('nav.navbar');

        if ($scrollPosition > ($windowHeight - 58)) {
            $navbarElement.addClass('fixed-top');
        } else {
            $navbarElement.removeClass('fixed-top');
        }
    }
});