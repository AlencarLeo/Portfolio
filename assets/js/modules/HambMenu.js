export default function initHambMenu(){
    const menu = document.querySelector('.hamburguer-menu');
    const hamburguer = document.querySelector('.hamburguer');

    const header = document.querySelector('.menu-container');

    const sections = document.querySelectorAll('.menu-container nav a');

    function handleBurguer(){
        hamburguer.classList.add('close');
        header.classList.add('close');
    }

    ['click'/*, 'touchstart'*/].forEach((userEvent)=>{
        menu.addEventListener(userEvent, handleBurguer);
    })

    function handleClose(){
        hamburguer.classList.remove('close');
        header.classList.remove('close');
    }

    ['click', 'touchstart'].forEach((userEvent)=>{
        sections.forEach((section)=>{
            section.addEventListener(userEvent, handleClose);
        })
    })
}