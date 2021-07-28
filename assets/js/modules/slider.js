export default function initSlider(){

}


const btns = document.querySelectorAll('.button');
const knowDiv = document.querySelectorAll('.know');
const imgs = document.querySelectorAll('.know img');
let index = 1;
let translatex = 0;

const tamanho = imgs.length - 3;

btns.forEach((btn)=>{
    ['touchstart', 'click'].forEach((userEvent)=>{
        btn.addEventListener(userEvent, (event)=>{

            if(window.innerWidth > 1190){
                if(event.target.id == 'previous' || event.target.classList.contains("fa-chevron-left")){
                    if(index != 1){
                        index--;
                        translatex +=230;
                    }
                }else if(event.target.id == 'next' || event.target.classList.contains("fa-chevron-right")){
                    if(index != tamanho){
                        index++;
                        translatex -=230;
                    }
                }
            }else if(window.innerWidth <= 1190 && window.innerWidth > 1070){
                if(event.target.id == 'previous' || event.target.classList.contains("fa-chevron-left")){
                    if(index != 1){
                        index--;
                        translatex +=250;
                    }
                }else if(event.target.id == 'next' || event.target.classList.contains("fa-chevron-right")){
                    if(index != tamanho){
                        index++;
                        translatex -=250;
                    }
                }
            }else if(window.innerWidth <= 1070 && window.innerWidth > 980){
                if(event.target.id == 'previous' || event.target.classList.contains("fa-chevron-left")){
                    if(index != 1){
                        index--;
                        translatex +=270;
                    }
                }else if(event.target.id == 'next' || event.target.classList.contains("fa-chevron-right")){
                    if(index != tamanho){
                        index++;
                        translatex -=270;
                    }
                }
            }else if(window.innerWidth <= 980){
                if(event.target.id == 'previous' || event.target.classList.contains("fa-chevron-left")){
                    if(index != 1){
                        index--;
                        translatex +=290;
                    }
                }else if(event.target.id == 'next' || event.target.classList.contains("fa-chevron-right")){
                    if(index != tamanho){
                        index++;
                        translatex -=290;
                    }
                }
            }

            knowDiv.forEach((div)=>{
                div.style.transform = `translateX(${translatex}px)`;
            })
        })
    })
})