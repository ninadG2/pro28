class connector
{
    constructor(body1, point2)
    {
        var options = 
        {
         'bodyA' :body1,
         'pointB' : point2,
         'stiffness' : 0.01,
         'length' :5
        }

        
        this.connect = constraint.create(options)
        World.add(world, this.connect)

        
     
    }   
     showThis()
      {
          var boyPos = this.connect.bodyA.position;
          var stonePos = this.connect.pointB;
          stroke("#000000")
          strokeWeight(3)
          line(boyPos.x,boyPos.y,stonePos.x,stonePos.y)

      }

        fly()
      {
        Matter.Body.applyForce(this.connect.bodyA,this.connect.bodyA.position,{x:100,y:-15}) 
        this.connect.bodyA = null;   
      } 
    

 }

