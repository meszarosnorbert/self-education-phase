import { Rect } from "./rectClass.js";

let canvas = document.querySelector("#phase08");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let rectangles = [];

// létrehoz és egy tömbhöz hozzáadja a négyzetek
for (let i = 0; i < 3; i++) {
    rectangles.push(new Rect(ctx, width, height));
}

export const canvas08 = () => {
    // minden kirajzolt kép után törli a canvast, így lesz látható a mozgás
    ctx.clearRect(0, 0, width, height);

    //Minden négyszögnek minden sarokpontját véletlen irányba mozgat, illetve canvas széléről visszapattan
    rectangles.forEach((rectangle) => {
        rectangle.points.forEach((point) => {
            point.bounce();
            point.update();
        });
        // a frissített négyszöget kirazolja
        rectangle.draw();
    });

    // animálásért felelős kód részlet
    window.requestAnimationFrame(canvas08);
};
