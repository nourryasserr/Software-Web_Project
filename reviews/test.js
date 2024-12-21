// JavaScript to handle rating system
const stars = document.querySelectorAll('.star');
const feedback = document.getElementById('rating-feedback');

stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = star.getAttribute('data-rating');

        // Remove active class from all stars
        stars.forEach(star => {
            star.classList.remove('active');
        });

        // Add active class to selected stars
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }

        // Provide feedback based on rating
        feedback.textContent = `You rated this ${rating} star${rating > 1 ? 's' : ''}.`;
});
});




