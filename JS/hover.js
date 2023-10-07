    $(document).ready(function() {
        // Add mouse hover animation
        $(".about-person").hover(
            function() {
                $(this).addClass("hovered"); // Add a class for hover effect
            },
            function() {
                $(this).removeClass("hovered"); // Remove the class when the mouse leaves
            }
        );
    });
