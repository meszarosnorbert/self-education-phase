export class Point {
    constructor(x, y, quadrant) {
        const speed = 1.5;

        this.x = x;
        this.y = y;
        this.velX = (Math.random() - 0.5) * speed;
        this.velY = (Math.random() - 0.5) * speed;
        this.quadrant = quadrant;
    }

    // ha a pont a határoló negyed széléhez ér akkor visszapattan
    bounce() {
        if (this.x <= this.quadrant[0] || this.x >= this.quadrant[2]) {
            this.velX *= -1;
        }

        if (this.y <= this.quadrant[1] || this.y >= this.quadrant[3]) {
            this.velY *= -1;
        }
    }

    // Mozgatásért felelős
    update() {
        this.x += this.velX;
        this.y += this.velY;
    }
}
