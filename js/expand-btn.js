$(document).ready(function () {
    var $expandButtons = $('.expand-btn');

    $expandButtons.click(function() {
        var $icon = $('.fa',this);

        if ($icon.hasClass('fa-chevron-down')) {
            $icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
            $icon.addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }
    })
});