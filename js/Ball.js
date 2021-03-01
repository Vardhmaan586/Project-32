class Ball{
    constructor(x,y,radius){
        
        

        this.body = Bodies.circle(x,y,radius);

        this.radius = radius;

        World.add(world,this.body);

        this.image = loadImage("images/ball.png");

        
    }

    display(){
        var x = this.body.position.x;
        var y = this.body.position.y;
        
        imageMode(CENTER);
        image(this.image,x,y,this.radius,this.radius);
    }
}