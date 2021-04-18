class Particles {

    constructor(x, y, width, height) {

        var options = {

            isStatic: false,
            restitution: 0.5,
            density: 1,
            friction: 1

        }

        this.image = loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);

    }

    display() {

        push();

        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);

        pop();

    }

}