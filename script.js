// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feature 1: Print / Save as PDF ---
    const printButton = document.getElementById('printBtn');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

    // --- Feature 2: JS Routing via data-url attributes ---
    const jsLinks = document.querySelectorAll('.js-link');

    jsLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetUrl = link.getAttribute('data-url');
            
            if (targetUrl) {
                // If it's a mailto link, open in the same window
                if (targetUrl.startsWith('mailto:')) {
                    window.location.href = targetUrl;
                } else {
                    // For external links like GitHub/LinkedIn buttons, open in a new tab
                    window.open(targetUrl, '_blank');
                }
            }
        });
    });
});