// Function to initialize and manage individual slideshows
function createSlideshow(slideshowContainer) {
    let slideIndex = 0;
    let slides = slideshowContainer.querySelectorAll(".slide");

    // Function to display the current slide
    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0; // Loop back to the first slide
        if (index < 0) slideIndex = slides.length - 1; // Loop back to the last slide

        slides.forEach(slide => slide.style.display = "none"); // Hide all slides
        slides[slideIndex].style.display = "block"; // Show the current slide
    }

    // Function to change the slide (either previous or next)
    function changeSlide(n) {
        slideIndex += n; // Adjust the slide index
        showSlide(slideIndex); // Show the updated slide
    }

    // Auto-start the slideshow
    showSlide(slideIndex);

    // Return the changeSlide function so you can use it with buttons
    return changeSlide;
}

// Initialize all slideshows on the page
document.querySelectorAll(".img-container").forEach(slideshowContainer => {
    const changeSlide = createSlideshow(slideshowContainer);

    // Attach event listeners to navigation buttons within each slideshow
    const prevButton = slideshowContainer.querySelector(".prev");
    const nextButton = slideshowContainer.querySelector(".next");

    // If the "prev" button exists, add an event listener
    if (prevButton) {
        prevButton.addEventListener("click", () => changeSlide(-1)); // Go to the previous slide
    }

    // If the "next" button exists, add an event listener
    if (nextButton) {
        nextButton.addEventListener("click", () => changeSlide(1)); // Go to the next slide
    }
});
