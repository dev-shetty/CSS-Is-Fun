const moverHandler = () => {
    let moverEle = document.getElementsByClassName("mover")[0];

    let maxX = window.innerWidth - moverEle.clientWidth;
    let maxY = window.innerHeight - moverEle.clientHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX = Math.min(randomX, maxX);
    randomY = Math.min(randomY, maxY);

    moverEle.style.transform = `translate(${randomX}px, ${randomY}px)`;
};
