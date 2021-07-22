export default function initSlider(){
    const btns = document.querySelectorAll('.button');
    const knowDiv = document.querySelectorAll('.know');
    const imgs = document.querySelectorAll('.know img');
    let index = 1;
    let translatex = 0;

    const tamanho = imgs.length - 3;

    btns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            if(event.target.id === 'previous'){
                if(index != 1){
                    index--;
                    translatex +=230;
                }
            }else{
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
}