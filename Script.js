// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cert-modal');
    const modalImage = document.getElementById('cert-image');
    const displayDuration = 5000; // Duration to display the image in milliseconds (e.g., 5000ms = 5s)

    document.querySelectorAll('.cert-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const imageUrl = link.getAttribute('data-image');
            modalImage.src = imageUrl;
            modal.style.display = 'flex'; // Show the modal and center the content

            // Hide the modal after a certain duration
            setTimeout(() => {
                modal.style.display = 'none';
            }, displayDuration);
        });
    });

    // Optional: Close the modal if user clicks outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
