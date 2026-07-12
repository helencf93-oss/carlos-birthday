// ======================================
// COUNTDOWN - OUR NEXT CHAPTER ❤️
// DATA: 03/01/2027
// ======================================


const targetDate = new Date("2027-01-03T00:00:00");


const countdown = document.getElementById("countdown");
const finalMessage = document.getElementById("finalMessage");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");



function updateCountdown(){


    const now = new Date();

    const difference = targetDate - now;



    // Quando chegar a data

    if(difference <= 0){


        countdown.style.opacity = "0";


        setTimeout(()=>{


            countdown.style.display = "none";


            finalMessage.innerHTML = `
            
            ❤️
            <br>
            <span>We made it.</span>

            `;


            finalMessage.classList.add("show");


        },1000);



        return;

    }



    const days = Math.floor(
        difference / (1000*60*60*24)
    );


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



    daysEl.textContent =
        String(days).padStart(3,"0");


    hoursEl.textContent =
        String(hours).padStart(2,"0");


    minutesEl.textContent =
        String(minutes).padStart(2,"0");


    secondsEl.textContent =
        String(seconds).padStart(2,"0");


}



updateCountdown();


setInterval(updateCountdown,1000);
