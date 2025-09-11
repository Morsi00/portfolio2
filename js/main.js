// Intersection Observer for progress bars animation
const skillsSection = document.querySelector('.expertise');
const progressBars = document.querySelectorAll('.progress');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';
            });
            observer.unobserve(skillsSection); // Stop observing after animation
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});

if (skillsSection) {
    observer.observe(skillsSection);
}

// You also need to add the data-progress attribute to your HTML
// I will modify the HTML part for you.
