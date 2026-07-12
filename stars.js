// ======================================
// ESTRELAS ANIMADAS - OUR NEXT CHAPTER
// ======================================

const starsContainer = document.getElementById("stars");

const numberOfStars = 100;


// Verifica se o elemento existe
if (starsContainer) {


    for (let i = 0; i < numberOfStars; i++) {


        const star = document.createElement("div");


        star.classList.add("star");


        // Tamanho aleatório das estrelas
        const size = Math.random() * 3 + 1;


        star.style.width = `${size}px`;

        star.style.height = `${size}px`;



        // Posição aleatória na tela

        star.style.left = `${Math.random() * 100}%`;

        star.style.top = `${Math.random() * 100}%`;



        // Velocidade diferente para cada estrela

        const duration = Math.random() * 4 + 2;

        star.style.animationDuration = `${duration}s`;



        // Momento diferente de início

        const delay = Math.random() * 5;

        star.style.animationDelay = `${delay}s`;



        // Algumas estrelas ficam mais discretas

        star.style.opacity =
            Math.random() * 0.7 + 0.3;



        starsContainer.appendChild(star);


    }


}


// ======================================
// EFEITO EXTRA:
// Pequeno movimento suave do céu
// ======================================

let position = 0;


function moveStars(){


    position += 0.02;


    if(starsContainer){

        starsContainer.style.transform =
            `translateY(${Math.sin(position) * 3}px)`;

    }


    requestAnimationFrame(moveStars);


}


moveStars();
/* =========================
   ESTRELAS
========================= */

.star{

    position:absolute;

    background:white;

    border-radius:50%;

    animation:twinkle infinite ease-in-out;

}


@keyframes twinkle{

    0%,100%{

        opacity:.3;

        transform:scale(1);

    }


    50%{

        opacity:1;

        transform:scale(1.8);

    }

}
