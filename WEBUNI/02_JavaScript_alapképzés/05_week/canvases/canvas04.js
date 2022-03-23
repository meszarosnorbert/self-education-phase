export const canvas04 = () => {
    let canvas = document.querySelector("#phase04");
    let ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    let startX = width / 4 + rand(width / 4);
    let startY = height / 4 + rand(height / 4);

    let secondX = (width * 3) / 4 + rand(width / 4);
    let secondY = height / 4 + rand(height / 4);

    let thirdX = (width * 3) / 4 + rand(width / 4);
    let thirdY = (height * 3) / 4 + rand(height / 4);

    let fourthX = width / 4 + rand(width / 4);
    let fourthY = (height * 3) / 4 + rand(height / 4);

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.moveTo(startX, startY);
    ctx.lineTo(secondX, secondY);
    ctx.lineTo(thirdX, thirdY);
    ctx.lineTo(fourthX, fourthY);
    ctx.lineTo(startX, startY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
};

const rand = (number) => {
    return Math.floor(Math.random() * number - number / 2);
};
