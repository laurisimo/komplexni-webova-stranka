function checkPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const error = document.getElementById('passwordError');

    if (password1 !== password2) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Function to scroll to top when back-to-top button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Event listener to toggle back-to-top button visibility on scroll
window.onscroll = function() {
    toggleBackToTopButton();
};
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
};