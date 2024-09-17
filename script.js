// Toggle function for 'Read More' and 'Read Less' content
function toggleText(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; // The 'Read More' button

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        content.style.display = 'none';
        button.textContent = 'Read More';
    }
}

// Toggle navigation on mobile view
function toggleNav() {
    const nav = document.getElementById('navbarNav');
    const expanded = nav.classList.contains('show');
    
    if (expanded) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}

// Initialize the display of additional content
document.addEventListener('DOMContentLoaded', function() {
    // Hide additional content sections by default
    const moreContents = document.querySelectorAll('.more-content');
    moreContents.forEach(content => content.style.display = 'none');

    // Attach event listeners to 'Read More' buttons
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    showMoreBtns.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.nextElementSibling.id;
            toggleText(targetId);
        });
    });
});