class Ball {
    constructor(x, y,radius) {
     
      this.body = Bodies.rectangle(x, y, 50);
      World.add(world, this.body);
      
      
    }
    display(){
   
      
      fill("pink");
      circle(0, 0, radius);
      circleMode(CENTER);
    }
  };
  