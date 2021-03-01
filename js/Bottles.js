class Bottles{
    constructor(x,y){
        
        var options = {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,10,40,options);
        
        this.width = 50;
        this.height = 50;

        this.image = loadImage("images/bottle.png");

        World.add(world,this.body);
    }

    display(){
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          
          
    }

    score(){
        if(this.body.position.y > 400 && this.body.position.y < 409 ){
            score +=1;
        }
    }
}