// more info button on home page
document.addEventListener("DOMContentLoaded", function () {
    const moreInfoButton = document.getElementById("more-info");
    const eventDescription = document.querySelector(".event-description");

    moreInfoButton.addEventListener("click", function () {
        if (eventDescription.style.display === "none") {
            eventDescription.style.display = "block";
        } else {
            eventDescription.style.display = "none";
        }
    });
});


// for the trunk showcase page
$(document).ready(function () {
    $('.trunk').on('mouseenter', function () {
        $(this).find('.trunk-description').fadeIn();
    }).on('mouseleave', function () {
        $(this).find('.trunk-description').fadeOut();
    });
});


// for the schedule (3rd page)
$(document).ready(function () {
    $('.event-title').on('click', function () {
        $(this).next('.event-details').slideToggle(300);
    });
});