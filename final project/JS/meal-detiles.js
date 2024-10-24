// Modal elements
const reviewButton = document.getElementById('reviewButton');
const reviewModal = document.getElementById('reviewModal');
const closeModal = document.getElementsByClassName('close')[0];
const submitReview = document.getElementById('submitReview');
const reviewList = document.getElementById('reviewList');
const seeMoreButton = document.getElementById('seeMoreButton');

// Sample reviews array
let reviews = [
    { name: "Alice", comment: "Amazing meal! Will order again." },
    { name: "Bob", comment: "The pasta was a little too salty." },
    { name: "Charlie", comment: "Best pasta I've had in a long time!" },
    { name: "David", comment: "Good portion size and flavor." },
    { name: "Eve", comment: "Could use more sauce, but overall great." },
    { name: "Frank", comment: "Loved it! Will definitely recommend." },
];

// Initial reviews to show
let visibleReviews = 5;

// Open review modal
reviewButton.onclick = function() {
    reviewModal.style.display = "flex";
}

// Close modal when clicking the close button
closeModal.onclick = function() {
    reviewModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == reviewModal) {
        reviewModal.style.display = "none";
    }
}

// Function to display reviews
function displayReviews() {
    reviewList.innerHTML = ''; // Clear the list
    const reviewsToShow = reviews.slice(0, visibleReviews);
    
    reviewsToShow.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        const reviewer = document.createElement('h3');
        reviewer.innerText = review.name;
        reviewItem.appendChild(reviewer);

        const reviewContent = document.createElement('p');
        reviewContent.innerText = review.comment;
        reviewItem.appendChild(reviewContent);

        reviewList.appendChild(reviewItem);
    });

    // Show "See More" button if there are more reviews to show
    if (visibleReviews < reviews.length) {
        seeMoreButton.style.display = "block";
    } else {
        seeMoreButton.style.display = "none";
    }
}

// Handle submitting a new review
submitReview.onclick = function() {
    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;

    if (reviewerName && reviewText) {
        reviews.unshift({ name: reviewerName, comment: reviewText });

        // Clear modal inputs
        document.getElementById('reviewerName').value = '';
        document.getElementById('reviewText').value = '';

        // Close modal
        reviewModal.style.display = "none";

        // Redisplay reviews with the new one
        displayReviews();
    } else {
        alert("Please enter your name and review.");
    }
}

// Handle "See More" button click
seeMoreButton.onclick = function() {
    visibleReviews += 5;
    displayReviews();
}

// Initial display of reviews
displayReviews();
