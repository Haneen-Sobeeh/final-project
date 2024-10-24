// Get elements
const sliderContainer = document.querySelector('.slider-container');
const slideRightBtn = document.getElementById('slideRight');
const slideLeftBtn = document.getElementById('slideLeft');

// Set the number of pixels to move per click
const scrollAmount = 300; 

// Move the slider right
slideRightBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Move the slider left
slideLeftBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});




// Get the modal
const modal = document.getElementById("feedbackModal");

// Get the button that opens the modal
const feedbackButton = document.getElementById("feedbackButton");

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
feedbackButton.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle feedback submission
document.getElementById("submitFeedback").onclick = function() {
    const feedbackText = document.getElementById("feedbackText").value;
    if (feedbackText) {
        alert("Thank you for your feedback: " + feedbackText);
        // Optionally, you can send the feedback to your server here
        modal.style.display = "none"; // Close the modal after submission
        document.getElementById("feedbackText").value = ""; // Clear the textarea
    } else {
        alert("Please enter your feedback before submitting.");
    }
}

