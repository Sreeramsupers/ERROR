class Flakes{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.flakeImg = loadImage("images/snow4.png");

        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body)
    }
    display() {

        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.flakeImg,0,0,this.r,this.r);
        pop();
    }

};