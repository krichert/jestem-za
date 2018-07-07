$(document).ready(function () {
    checkFixedHeader();

    $(window).scroll(checkFixedHeader);

    function checkFixedHeader() {
        $scrollPosition = $(this).scrollTop();
        $windowHeight = $(this).height();
        $navbarElement = $('nav.navbar');

        // section title has 80vh
        if ($scrollPosition > ($windowHeight - 58)) {
            $navbarElement.addClass('fixed-top');
        } else {
            $navbarElement.removeClass('fixed-top');
        }
    }
});