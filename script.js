const target = new Date("2027-01-03T00:00:00");


const countdown = document.getElementById("countdown");

const finalMessage = document.getElementById("finalMessage");


function update(){


const now = new Date();


const distance = target - now;



if(distance <= 0){


countdown.style.display="none";


finalMessage.style.display="block";


return;


}



const days = Math.floor(distance/(1000*60*60*24));


const hours = Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);


const minutes = Math.floor(
(distance%(1000*60*60))/(1000*60)
);


const seconds = Math.floor(
(distance%(1000*60))/1000
);



document.getElementById("days").innerHTML =
String(days).padStart(3,"0");


document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");


document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");


document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");


}


update();

setInterval(update,1000);
