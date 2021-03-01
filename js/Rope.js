class Rope{
    constructor(bodyA,pointB){

    var options = {
        bodyA : bodyA,
        pointB : pointB,
      stiffness : 0.035,
      length : 5
    }

    this.body = Constraint.create(options);

    World.add(world,this.body);
}

fly(){
this.body.bodyA = null;
}

attach(body){
  this.body.bodyA = body;
}

display(){
  if(this.body.bodyA !== null){ 
   var pointA = this.body.bodyA.position;
   var pointB = this.body.pointB;

   push();
   stroke("black");
   strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
  }
}
}