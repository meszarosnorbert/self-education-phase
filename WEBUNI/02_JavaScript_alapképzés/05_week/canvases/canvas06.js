let canvas = document.querySelector("#phase06");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

class Point {
    constructor(x, y, quadrant) {
        const speed = 3;

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

const quadrants = [
    [0, 0, width / 2, height / 2],
    [width / 2, 0, width, height / 2],
    [width / 2, height / 2, width, height],
    [0, height / 2, width / 2, height],
];

const first = new Point(
    width / 4 + rand(width / 4),
    height / 4 + rand(height / 4),
    quadrants[0]
);

const second = new Point(
    (width * 3) / 4 + rand(width / 4),
    height / 4 + rand(height / 4),
    quadrants[1]
);

const third = new Point(
    (width * 3) / 4 + rand(width / 4),
    (height * 3) / 4 + rand(height / 4),
    quadrants[2]
);
const fourth = new Point(
    width / 4 + rand(width / 4),
    (height * 3) / 4 + rand(height / 4),
    quadrants[3]
);

let points = [];
points.push(first);
points.push(second);
points.push(third);
points.push(fourth);

export const canvas06 = () => {
    ctx.clearRect(0, 0, width, height);

    points.forEach((point) => {
        point.update();
        point.bounce();
    });

    draw();
    window.requestAnimationFrame(canvas06);
};

const draw = () => {
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.moveTo(first.x, first.y);
    ctx.lineTo(second.x, second.y);
    ctx.lineTo(third.x, third.y);
    ctx.lineTo(fourth.x, fourth.y);
    ctx.lineTo(first.x, first.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
};
