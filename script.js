// =========================
// DATA DO REENCONTRO
// 03/01/2027
// =========================

const targetDate = new Date("2027-01-03T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdown = document.getElementById("countdown");
const finalMessage = document.getElementById("finalMessage");

function animate(element){

    element.style.transform = "scale(1.12)";
    element.style.opacity = ".6";

    setTimeout(()=>{

        element.style.transform="scale(1)";
        element.style.opacity="1";

    },180);

}

function updateCountdown(){

    const now = new Date();

    const difference = targetDate - now;

    if(difference <= 0){

        countdown.style.display="none";

        document.querySelector(".subtitle").innerHTML =
        "The wait is finally over.";

        document.querySelector(".footer-text").innerHTML =
        "❤️ Welcome to our next chapter together.";

        finalMessage.innerHTML =
        "🇧🇷 ✈️ 🇦🇺<br><br><strong>We made it.</strong>";

        return;
    }

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor(
        (difference % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (difference % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (difference % (1000*60))
        /1000
    );

    if(daysEl.textContent != days){
        animate(daysEl);
    }

    if(hoursEl.textContent != hours){
        animate(hoursEl);
    }

    if(minutesEl.textContent != minutes){
        animate(minutesEl);
    }

    animate(secondsEl);

    daysEl.textContent = String(days).padStart(3,"0");
    hoursEl.textContent = String(hours).padStart(2,"0");
    minutesEl.textContent = String(minutes).padStart(2,"0");
    secondsEl.textContent = String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);
