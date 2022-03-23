export const canvas03 = () => {
    let canvas = document.querySelector("#phase03");
    let ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.moveTo(width / 4, height / 4);
    ctx.lineTo((width * 3) / 4, height / 4);
    ctx.lineTo((width * 3) / 4, (height * 3) / 4);
    ctx.lineTo(width / 4, (height * 3) / 4);
    ctx.lineTo(width / 4, height / 4);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
};
