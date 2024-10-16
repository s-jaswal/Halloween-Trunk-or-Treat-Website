// for the trunk showcase page
$(document).ready(function () {
    $('.trunk-image').on('mouseenter', function () {
        // Find the sibling description of the hovered image and fade it in
        $(this).siblings('.trunk-description').fadeIn(300);
    });

    $('.trunk-image').on('mouseleave', function () {
        // Find the sibling description of the hovered image and fade it out
        $(this).siblings('.trunk-description').fadeOut(300);
    });
});

// for the schedule (3rd page)
$(document).ready(function () {
    $('.event-title').on('click', function () {
        $(this).next('.event-details').slideToggle(300);
    });
});