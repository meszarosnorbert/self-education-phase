export const canvas01 = () => {
    let canvas = document.querySelector("#phase01");
    let ctx = canvas.getContext("2d");

    let width = canvas.width;
    let height = canvas.height;

    let size = 20;

    ctx.fillRect(width / 2 - size, height / 2 - size, size * 2, size * 2);
};
