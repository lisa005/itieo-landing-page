const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Displays mobile menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active'); 
    if(window.innerWidth <= 1006 && menuBars){
        menu.classList.toggle('is-active');
        menuLink.classList.toggle('active');
    }

}

menuLink.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Sends form data to email 

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let fnameInput = myForm.querySelector('input[name="FirstName"]');
    let lnameInput = myForm.querySelector('input[name="LastName"]');
    let emailInput = myForm.querySelector('input[name="Email"]');
    let phoneInput = myForm.querySelector('input[name="Phone"]');
    let messageInput = myForm.querySelector('textarea[name="Message"]');

    fetch("https://formsubmit.co/ajax/lisasuzuki1@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            sender: fnameInput.value + ' ' + lnameInput.value, 
            email: emailInput.value,
            phone: phoneInput.value,
            message: messageInput.value
        }) 
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(myForm.reset())
        .then(resetForm)
        .catch(error => console.log(error));
});
 
// Displays modal after form submit 

var modal = document.getElementById('submit-modal');
var btn = document.getElementById('submit-btn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

