let documentBody = document.querySelector("body");
let colourButton = document.querySelector("button");

const genColor = () => {
    const rbgOne = Math.floor(Math.random() * 256);
    const rbgTwo = Math.floor(Math.random() * 256);
    const rbgThree = Math.floor(Math.random() * 256);
    return `rgb(${rbgOne}, ${rbgTwo}, ${rbgThree})`
};


colourButton.onclick = () => {
    documentBody.style.backgroundColor = genColor();
};
