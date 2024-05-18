// Elements
const ratingContainer = document.querySelector('.rating__container');
const ratingScores = document.querySelectorAll('.scale-num');
const hiddenSuccessMessage = document.querySelector('.hidden');
const button = document.querySelector('.btn');
const ratingFeedback = document.querySelector('.rating__feedback-text');

// Check if rating was selected
let ratingClicked;

// Handling Rating Selection
ratingScores.forEach(function (score) {
	// Event listener
	score.addEventListener('click', function () {
		// Remove 'clicked' class
		ratingScores.forEach(num => num.classList.remove('clicked'));
		// Add the 'clicked' class
		this.classList.add('clicked');

		// Update event if any rating is clicked
		ratingClicked = this;
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
		hiddenSuccessMessage.classList.add('rating__success');

		// update success message selection text
		ratingFeedback.textContent = `You selected ${ratingClicked.textContent} out of
		${ratingScores.length}`;

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
		hiddenSuccessMessage.classList.remove('rating__success');

		// add rating container
		ratingContainer.style.opacity = 100;
	}
});
