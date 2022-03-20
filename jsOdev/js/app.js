let fullName=prompt("Lütfen adinizi giriniz");
let title = document.querySelector("#start-title");

title.innerHTML = `${title.innerHTML} ${fullName}`;



function GetTime() {
    let now = new Date();
    let hour= now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = now.getDay();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    (hour<10)? document.getElementById("hour").innerHTML="0"+hour:document.getElementById("hour").innerText=hour;
    (minute<10)? document.getElementById("minute").innerHTML="0"+minute:document.getElementById("minute").innerText=minute;
    (second<10)? document.getElementById("second").innerHTML="0"+second:document.getElementById("second").innerText=second;

    document.getElementById("date").innerHTML= day+" / "+month+" / "+year;
}
setInterval(function(){GetTime();},1000);