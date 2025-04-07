// JavaScript for the Coursera final project
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuToggle.setAttribute('aria-expanded', 'true');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    menuToggle.setAttribute('aria-expanded', 'false');
});

// Mobile menu links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Accessibility features
const contrastToggle = document.getElementById('contrast');
const textSizeSlider = document.getElementById('text-size');

contrastToggle.addEventListener('change', () => {
    if (contrastToggle.checked) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
});

textSizeSlider.addEventListener('input', () => {
    const size = textSizeSlider.value;
    const html = document.documentElement;
    
    if (size === '1') {
        html.style.fontSize = '16px';
    } else if (size === '2') {
        html.style.fontSize = '18px';
    } else if (size === '3') {
        html.style.fontSize = '20px';
    }
});

// Project tabs
const tabButtons = document.querySelectorAll('[role="tab"]');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active state from all tabs
        tabButtons.forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
            btn.classList.remove('bg-white', 'shadow', 'text-gray-800');
            btn.classList.add('text-gray-600', 'hover:bg-gray-200');
        });
        
        // Set active state on clicked tab
        button.setAttribute('aria-selected', 'true');
        button.classList.remove('text-gray-600', 'hover:bg-gray-200');
        button.classList.add('bg-white', 'shadow', 'text-gray-800');
        
        // Filter projects logic would go here in a real implementation
    });
});
// Email 
function sendMail(){
    let parms = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    const serviceID = "service_4mymvbp";
    const templateID = "template_j5h8wdn";
    emailjs.send(serviceID,templateID,parms)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        console.log(res);

    })    
}