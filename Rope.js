
class Rope {  
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY ; 
        
          var options = {
          bodyA:body1,
          bodyB:body2 ,
          pointB:{x:this.offsetX, y:this.offsetY}
         }
  
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
  
       
        
  }
   display(){
    
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    var A = pointA.x
    var B = pointA.y
    var X = pointB.x+this.offsetX
    var Y = pointB.y+this.offsetY
    strokeWeight(4);
    line(A, B, X, Y);
        
  }
  }