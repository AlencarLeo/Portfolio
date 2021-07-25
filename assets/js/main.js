//import initCursor from "./modules/cursor.js";
import initNavBar from "./modules/navBar.js";
import initSlider from "./modules/slider.js";


initNavBar();
initSlider();
// initCursor();

const btn = document.getElementById('submit');

function handleerror(event){
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const underlineName = document.querySelector('.position-name .underline');
    const underlineEmail = document.querySelector('.position-email .underline');
    const underlineMessage = document.querySelector('.position-message .underline');

    if(name.value == ''){
        underlineName.style.backgroundColor = 'red'
    }
    if(message.value == ''){
        underlineMessage.style.backgroundColor = 'red'
    }

    if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1 || email.value.indexOf('@') == email.value.length || email.value.indexOf('.') == email.value.length ){
        underlineEmail.style.backgroundColor = 'red'
    }
}

btn.addEventListener('click', handleerror);