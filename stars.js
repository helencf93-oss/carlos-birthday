const starsContainer = document.getElementById("stars");

const numberOfStars = 80;

for (let i = 0; i < numberOfStars; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    starsContainer.appendChild(star);

}
