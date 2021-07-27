export default function initKwowClick(){
    const knowDivs = document.querySelectorAll('.know')

    function handleKnow(){
        this.classList.add('click-div')
        setTimeout(()=>{
            this.classList.remove('click-div')
        },1700)
    }

    knowDivs.forEach((know)=>{
        ['click', 'touchstart'].forEach((userEvent)=>{
            know.addEventListener(userEvent, handleKnow)
        })
    })
}