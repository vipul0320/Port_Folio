document.addEventListener("DOMContentLoaded", function() {
    // Find the "Hire me" button element
    var hireMeBtn = document.getElementById("hire-me-btn");

    // Add click event listener to the button
    hireMeBtn.addEventListener("click", function() {
        // Find the contact section (footer)
        var contactSection = document.getElementById("contact");

        // Scroll to the contact section smoothly
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
    // JavaScript for shrinking header on scroll
var header = document.querySelector("header");
var lastScrollTop = 0; // Variable to store the last scroll position

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollTop) {
        // Scrolling down
        header.classList.add("shrink");
    } else {
        // Scrolling up
        if (scrollPosition < 50) {
            header.classList.remove("shrink");
        }
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling
});

});
