export default function initCursor(){
    const cursor = document.getElementById('cursor');

    function handlecursor(i){
        let x = i.clientX;
        let y = i.clientY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";

        // if(x == 0 || y == 0 || x == window.innerWidth || y == window.innerHeight){
        //     setTimeout(()=>{
        //         cursor.classList.add('afk');
        //     },2000)
        // }else{
        //     cursor.classList.remove('afk');
        // }
    }

    ['mousemove'].forEach((userEvent)=>{
        document.addEventListener(userEvent, handlecursor);
    })
}