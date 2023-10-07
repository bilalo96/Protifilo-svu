$(document).ready(function() {
    // When any toggle button is clicked
    $(".toggle-btn").click(function() {
        // Find the corresponding additional information div
        var $additionalInfo = $(this).next(".additional-info");

        // Toggle the visibility of the additional information
        $additionalInfo.toggle();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var animateBtn = document.querySelector(".animate-btn");
    var animatedImg = document.querySelector(".animated-img");

    animateBtn.addEventListener("click", function () {
        // Add a CSS class for the animation
        animatedImg.classList.add("rotate-animation");

        // Remove the class after the animation completes
        setTimeout(function () {
            animatedImg.classList.remove("rotate-animation");
        }, 1000); // 1000 milliseconds (1 second)
    });
});

