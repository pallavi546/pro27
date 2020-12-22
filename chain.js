class  Chain{
    constructor(body1,body2)
    {
      var options={
          bodyA:body1.body,
          bodyB:body2.body,
          length:100,
          stiffness:0.5
      } 
      this.chain=Constraint.create(options) 
      this.body1=body1.body
      this.body2=body2.body
       World.add(world,this.chain)                             
    }
    display(){
      line(this.body1.position.x,this.body1.position.y,this.body2.position.x,this.body2.position.y)
    }
}