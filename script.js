let slideIndices = {}; // Object to store slide index for each container

// Initialize each slideshow container
document.querySelectorAll(".img-container").forEach((container, index) => {
    slideIndices[index] = 0; // Start at first slide (0-based index)
    showSlide(container, index); // Display the first slide
});

function showSlide(container, containerIndex) {
    let slides = container.querySelectorAll(".slide");
    if (slides.length === 0) return; // Skip if no slides exist

    slides.forEach(slide => slide.style.display = "none"); // Hide all slides
    slides[slideIndices[containerIndex]].style.display = "block"; // Show the correct slide
}

function changeSlide(n, container) {
    let containerIndex = Array.from(document.querySelectorAll(".img-container")).indexOf(container);
    let slides = container.querySelectorAll(".slide");
    if (slides.length === 0) return; // Skip if no slides exist

    // Calculate new index
    let newIndex = slideIndices[containerIndex] + n;

    // Ensure slide index stays within bounds
    if (newIndex >= slides.length) {
        newIndex = 0; // Loop to first slide
    } else if (newIndex < 0) {
        newIndex = slides.length - 1; // Loop to last slide
    }

    slideIndices[containerIndex] = newIndex; // Update the index
    showSlide(container, containerIndex); // Show the new slide
}
