export default function initSlider(){
    const btns = document.querySelectorAll('.button');
    const knowDiv = document.querySelectorAll('.know');
    const imgs = document.querySelectorAll('.know img');
    let index = 1;
    let translatex = 0;

    const tamanho = imgs.length - 3;

    btns.forEach((btn)=>{
        ['touchstart', 'click'].forEach((userEvent)=>{
            btn.addEventListener(userEvent, (event)=>{

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
    
                knowDiv.forEach((div)=>{
                    div.style.transform = `translateX(${translatex}px)`;
                })
            })
        })
    })
}