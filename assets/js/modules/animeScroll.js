export default function initAnimeScroll(){

}

const target = document.querySelectorAll('[data-anime]');


function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element)=> {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    });
}

setTimeout(animeScroll, 4500);

window.addEventListener('scroll', animeScroll);