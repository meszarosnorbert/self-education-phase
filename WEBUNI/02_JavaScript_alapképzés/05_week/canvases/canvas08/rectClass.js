import { Point } from "./pointClass.js";

export class Rect {
    constructor(ctx, width, height) {
        // a rajz területen a negyedek meghatározása
        const quadrants = [
            [0, 0, width / 2, height / 2],
            [width / 2, 0, width, height / 2],
            [width / 2, height / 2, width, height],
            [0, height / 2, width / 2, height],
        ];

        const rand = (number) => {
            return Math.floor(Math.random() * number - number / 2);
        };

        this.first = new Point(
            width / 4 + rand(width / 4),
            height / 4 + rand(height / 4),
            quadrants[0]
        );

        this.second = new Point(
            (width * 3) / 4 + rand(width / 4),
            height / 4 + rand(height / 4),
            quadrants[1]
        );

        this.third = new Point(
            (width * 3) / 4 + rand(width / 4),
            (height * 3) / 4 + rand(height / 4),
            quadrants[2]
        );

        this.fourth = new Point(
            width / 4 + rand(width / 4),
            (height * 3) / 4 + rand(height / 4),
            quadrants[3]
        );

        this.points = [];
        this.points.push(this.first);
        this.points.push(this.second);
        this.points.push(this.third);
        this.points.push(this.fourth);

        // ez egy nem szép megoldás a véltelen színválsztásra
        const color =
            Math.random() > 0.333
                ? Math.random() > 0.5
                    ? "#233D4D"
                    : "#FE7F2D"
                : "#FCCA46";

        // négyszög kirajzolás
        this.draw = () => {
            ctx.beginPath();
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.moveTo(this.first.x, this.first.y);
            ctx.lineTo(this.second.x, this.second.y);
            ctx.lineTo(this.third.x, this.third.y);
            ctx.lineTo(this.fourth.x, this.fourth.y);
            ctx.lineTo(this.first.x, this.first.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 5;
            ctx.stroke();
        };
    }
}
