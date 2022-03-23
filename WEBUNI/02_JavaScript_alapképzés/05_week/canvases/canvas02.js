export const canvas02 = () => {
    let canvas = document.querySelector("#phase02");
    let ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    let size = 5;

    // elso kvadrans
    ctx.fillRect(width / 4 - size, height / 4 - size, size * 2, size * 2);
    // masodik kvadrans
    ctx.fillRect((width * 3) / 4 - size, height / 4 - size, size * 2, size * 2);
    // harmadik kvadrans
    ctx.fillRect(width / 4 - size, (height * 3) / 4 - size, size * 2, size * 2);
    // negyedik kvadrans
    ctx.fillRect(
        (width * 3) / 4 - size,
        (height * 3) / 4 - size,
        size * 2,
        size * 2
    );
};
