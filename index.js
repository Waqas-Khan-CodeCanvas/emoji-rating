//################## Select all star and emoji elements ###############
const starsElement = document.querySelectorAll(".fa-star");
const emojisElement = document.querySelectorAll(".fa-regular");

// Define colors for different rating levels
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// Initialize the rating system with default (1-star) selected
updateRating(0);

// Add event listeners to each star for click interaction
starsElement.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index); // Update rating based on clicked star
    });
});

/**
 * Updates the UI based on selected rating
 * @param {number} index - The index of the selected star
 */
function updateRating(index) {
    // Loop through stars and update active state
    starsElement.forEach((star, idx) => {
        if (idx < index + 1) {
            star.classList.add("active"); // Highlight selected stars
        } else {
            star.classList.remove("active"); // Reset unselected stars
        }
    });

    // Loop through emojis and update position & color based on rating
    emojisElement.forEach((emojiElement) => {
        emojiElement.style.transform = `translateX(-${index * 50}px)`; // Move emoji
        emojiElement.style.color = colorsArray[index]; // Change emoji color
    });
}
