export default function initFormRequest(){

    const btn = document.getElementById('submit');

    function handleerror(event){
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        //Name variables
        const underlineName = document.querySelector('.position-name .underline');
        const inputName = document.querySelector('.position-name input');
        const labelName = document.querySelector('.position-name label')

        //Email variables
        const underlineEmail = document.querySelector('.position-email .underline');
        const inputEmail = document.querySelector('.position-email input');
        const labelEmail = document.querySelector('.position-email label')

        //Message variables
        const underlineMessage = document.querySelector('.position-message .underline');
        const inputMessage = document.querySelector('.position-message textarea');
        const labelMessage = document.querySelector('.position-message label')
        

        if(name.value == ''){
            underlineName.style.setProperty('--beforeUnderlineColor','red');
            underlineName.style.setProperty('--beforeUnderlineWidth','width .3s ease-in-out');

            labelName.style.setProperty('--labelColor','red');

            inputName.classList.add('error');        
        }
        if(name.value != ''){
            underlineName.style.setProperty('--beforeUnderlineColor','#08FFFF');

            labelName.style.setProperty('--labelColor','#08FFFF');

            inputName.classList.remove('error');        
        }


        if(message.value == ''){
            underlineMessage.style.setProperty('--beforeUnderlineColor','red');
            underlineMessage.style.setProperty('--beforeUnderlineWidth','width .3s ease-in-out');

            labelMessage.style.setProperty('--labelColor','red');

            inputMessage.classList.add('error'); 
        }
        if(message.value != ''){
            underlineMessage.style.setProperty('--beforeUnderlineColor','#08FFFF');

            labelMessage.style.setProperty('--labelColor','#08FFFF');

            inputMessage.classList.remove('error'); 
        }


        if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1 || email.value.indexOf('@') == email.value.length || email.value.indexOf('.') == email.value.length ){
            underlineEmail.style.setProperty('--beforeUnderlineColor','red');
            underlineEmail.style.setProperty('--beforeUnderlineWidth','width .3s ease-in-out');

            labelEmail.style.setProperty('--labelColor','red');

            inputEmail.classList.add('error');      
        }
        if(email.value != '' && email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1 && email.value.indexOf('.') - email.value.indexOf('@') != 1 && email.value.indexOf('@') != email.value.length && email.value.indexOf('.') != email.value.length ){
            underlineEmail.style.setProperty('--beforeUnderlineColor','#07FFFF');

            labelEmail.style.setProperty('--labelColor','#07FFFF');

            inputEmail.classList.remove('error');      
        }
    }

    ['click', 'touchstart'].forEach((userEvent)=>{
        btn.addEventListener(userEvent, handleerror);
    })
    
}