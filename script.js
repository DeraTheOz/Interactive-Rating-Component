// Elements
const ratingContainer = document.querySelector('.rating__container');
const successMessage = document.querySelector('.rating__success');
const ratingScore = document.querySelectorAll('.scale-num');
const button = document.querySelector('.btn');
const ratingFeedback = document.querySelector('.rating__feedback-text');

// Check if rating was selected
let ratingClicked;

// Handling Rating Selection
ratingScore.forEach(function (score) {
	// Event listener
	score.addEventListener('click', () => {
		// Add the clicked class
		score.classList.add('clicked');

		// Update event if any rating is clicked
		ratingClicked = score;
	});
});

// Event listener for button
button.addEventListener('click', function (e) {
	e.preventDefault();
	// Check if a rating was selected
	if (ratingClicked) {
		// remove rating container
		ratingContainer.style.opacity = 0;

		// add success message
		successMessage.classList.add('hidden');

		// update success message selection text
		ratingFeedback.textContent = `You selected ${ratingClicked.textContent} out of ${ratingScore.length}`;

		// Reset rating
		ratingClicked = false;
	} else {
		// Add error messages
		alert('Please select a rating before submitting');
	}
});

// Remove success message
document.addEventListener('click', e => {
	if (!ratingContainer.contains(e.target)) {
		// remove success message modal
		successMessage.classList.remove('hidden');

		// add rating container
		ratingContainer.style.opacity = 100;
	}
});
