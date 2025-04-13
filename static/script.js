document.addEventListener("DOMContentLoaded", function() 
{
    const toggleButton = document.getElementById("toggle-images");
    const images = document.querySelectorAll(".portfolio-image");

    // Hide images by default
    images.forEach(image => {
        image.style.display = "none";
    });

    toggleButton.addEventListener("click", function() {
        images.forEach(image => {
            if (image.style.display === "none") {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    });

    // Example: Show alert when clicking on a specific image
    const imageElements = document.querySelectorAll(".portfolio-image");
    imageElements.forEach(image => {
        image.addEventListener("click", function() {
            alert(`You clicked on ${image.alt}`);
        });
    });
});
