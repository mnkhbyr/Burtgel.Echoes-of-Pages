document.addEventListener('DOMContentLoaded', function() {
    const showSurveyButton = document.getElementById('showSurveyButton');
    const formSection = document.getElementById('form-section');
    const introductionSection = document.getElementById('introduction-section');
    const priceInfoSection = document.getElementById('price-info-section');
    const contactInfoSection = document.getElementById('contact-info-section');
    const priceInfoButton = document.getElementById('priceInfoButton');
    const contactInfoButton = document.getElementById('contactInfoButton');
    const footer = document.getElementById('footer'); 

    // Function to show the survey form and related sections
    showSurveyButton.addEventListener('click', function() {
        introductionSection.classList.add('introduction-small');
        formSection.classList.add('form-expanded');
        formSection.style.display = 'block'; 
        priceInfoSection.style.display = 'block'; 
        setTimeout(scrollToForm, 500);
    });

    // Function to toggle the visibility of the price info section
    priceInfoButton.addEventListener('click', function() {
        if (priceInfoSection.style.display === 'block') {
            priceInfoSection.style.display = 'none'; 
        } else {
            priceInfoSection.style.display = 'block'; 
            setTimeout(scrollToPriceInfo, 500); 
        }
        // Hide contact info section if visible
        if (contactInfoSection.style.display === 'block') {
            contactInfoSection.style.display = 'none'; 
        }
    });

    // Function to toggle the visibility of the contact info section
    contactInfoButton.addEventListener('click', function() {
        if (contactInfoSection.style.display === 'block') {
            contactInfoSection.style.display = 'none'; 
        } else {
            contactInfoSection.style.display = 'block'; 
            setTimeout(scrollToContactInfo, 500); 
        }
        // Hide price info section if visible
        if (priceInfoSection.style.display === 'block') {
            priceInfoSection.style.display = 'none'; 
        }
    });


    function scrollToForm() {
        const yOffset = -60;
        const surveyForm = document.getElementById('surveyForm');
        const y = surveyForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    function scrollToPriceInfo() {
        const yOffset = -60;
        const y = priceInfoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
});