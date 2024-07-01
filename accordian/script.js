document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion');
    const multiSelectCheckbox = document.getElementById('multiselect');

    accordions.forEach((accordion, index) => {
        const titleSection = accordion.querySelector('.title-section');
        const description = accordion.querySelector('.description');
        const expandIcon = titleSection.querySelector('.expand-icon');
        const collapseIcon = titleSection.querySelector('.collapse-icon');

        // Initially set the first item to be expanded
        if (index === 0) {
            description.style.display = 'block';
            expandIcon.style.display = 'none';
            collapseIcon.style.display = 'block';
        } else {
            description.style.display = 'none';
            expandIcon.style.display = 'block';
            collapseIcon.style.display = 'none';
        }

        titleSection.addEventListener('click', function() {
            const isExpanded = description.style.display === 'block';

            if (!multiSelectCheckbox.checked) {
                // Collapse all other accordions if multi-select is not enabled
                accordions.forEach((acc, idx) => {
                    if (idx !== index) {
                        const otherDescription = acc.querySelector('.description');
                        const otherExpandIcon = acc.querySelector('.expand-icon');
                        const otherCollapseIcon = acc.querySelector('.collapse-icon');
                        otherDescription.style.display = 'none';
                        otherExpandIcon.style.display = 'block';
                        otherCollapseIcon.style.display = 'none';
                    }
                });
            }

            if (isExpanded) {
                description.style.display = 'none';
                expandIcon.style.display = 'block';
                collapseIcon.style.display = 'none';
            } else {
                description.style.display = 'block';
                expandIcon.style.display = 'none';
                collapseIcon.style.display = 'block';
            }
        });
    });
});


