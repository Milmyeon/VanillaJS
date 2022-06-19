const myclock = document.querySelector("h2#clock");
const myDate = document.querySelector("h3#date")
function tiktok(){

    let time = new Date();
    let h = String(time.getHours());
    let m = String(time.getMinutes());
    let s = String(time.getSeconds());


    myclock.innerText = `My Clock : ${h.padStart(2,0)}:${m.padStart(2,0)}:${s.padStart(2,0)}`; 
   
}

tiktok();
setInterval(tiktok,1000);

