// Placeholder for future enhancements (analytics, extra UX, etc.)
// Bootstrap handles tab + accordion behavior via data attributes.
console.log("Portfolio site loaded for Gregory Marshall. - app.js:3");

document.addEventListener('DOMContentLoaded', function () {
    const viewSummaryBtn = document.querySelector('a[href="#summary"]');
    
    if (viewSummaryBtn) {
        viewSummaryBtn.addEventListener('click', function (e) {
            // 1. Prevent default anchor jump
            e.preventDefault();

            // 2. Find the 'Summary' tab trigger
            const summaryTabTrigger = document.querySelector('#summary-tab');
            
            // 3. Use Bootstrap's Tab constructor to show it
            const tab = new bootstrap.Tab(summaryTabTrigger);
            tab.show();

            // 4. Smooth scroll to the content area
            document.getElementById('mainTabs').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});
