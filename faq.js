// FAQ Toggle Script
document.querySelectorAll('.faq-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Toggle the answer visibility
        answer.classList.toggle('hidden');

        // Change the icon from '+' to '-' based on state
        const icon = button.querySelector('i');
        icon.classList.toggle('ri-add-line');
        icon.classList.toggle('ri-subtract-line');
    });
});
