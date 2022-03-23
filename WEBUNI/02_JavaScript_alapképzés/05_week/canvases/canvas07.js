let canvas = document.querySelector("#phase07");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

class Point {
    constructor(x, y, quadrant) {
        const speed = 2;

        this.x = x;
        this.y = y;
        this.velX = (Math.random() - 0.5) * speed;
        this.velY = (Math.random() - 0.5) * speed;
        this.quadrant = quadrant;
    }

    bounce() {
        if (this.x <= this.quadrant[0] || this.x >= this.quadrant[2]) {
            this.velX *= -1;
        }

        if (this.y <= this.quadrant[1] || this.y >= this.quadrant[3]) {
            this.velY *= -1;
        }
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
    }
}

const rand = (number) => {
    return Math.floor(Math.random() * number - number / 2);
};

class Rect {
    constructor() {
        const quadrants = [
            [0, 0, width / 2, height / 2],
            [width / 2, 0, width, height / 2],
            [width / 2, height / 2, width, height],
            [0, height / 2, width / 2, height],
        ];

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

        this.draw = () => {
            ctx.beginPath();
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.moveTo(this.first.x, this.first.y);
            ctx.lineTo(this.second.x, this.second.y);
            ctx.lineTo(this.third.x, this.third.y);
            ctx.lineTo(this.fourth.x, this.fourth.y);
            ctx.lineTo(this.first.x, this.first.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.stroke();
        };
    }
}

let rectangles = [];

for (let i = 0; i < 3; i++) {
    rectangles.push(new Rect());
}

export const canvas07 = () => {
    ctx.clearRect(0, 0, width, height);

    rectangles.forEach((recPoints) => {
        recPoints.points.forEach((dots) => {
            dots.bounce();
            dots.update();
        });
        recPoints.draw();
    });

    window.requestAnimationFrame(canvas07);
};
