document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navClose = document.querySelector('.nav-close');


    navToggler.addEventListener('click', function() {
        aside.classList.toggle('active'); // Toggle active class
        navClose.classList.toggle('hidden'); // Toggle close icon visibility
    });


    navClose.addEventListener('click', function() {
        aside.classList.remove('active'); // Remove active class
        navClose.classList.add('hidden'); // Hide close icon
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const themeToggler = document.querySelector('.theme-toggler');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');


    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            lightModeIcon.classList.add('hidden');
            darkModeIcon.classList.remove('hidden');
        }
    }


    themeToggler.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');


        // Toggle icons
        lightModeIcon.classList.toggle('hidden');
        darkModeIcon.classList.toggle('hidden');


        // Save user preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


function validateForm() {
    
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('subjectError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    
    const nameInput = document.getElementById('nameInput').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();
    const subjectInput = document.getElementById('subjectInput').value.trim();
    const messageInput = document.getElementById('messageInput').value.trim();

    let valid = true;

    if (nameInput === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === '' || !emailPattern.test(emailInput)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

 
    if (subjectInput === '') {
        document.getElementById('subjectError').style.display = 'block';
        valid = false;
    }

   
    if (messageInput === '') {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }


    if (valid) {
        alert('Form submitted successfully!');
       
    }
}

