class mango
{

   constructor(x,y,radius)
   {
    var options = {
                    'friction':0.2   ,
                    'restitution':0.1 , 
                    'isStatic': true
                    
                  }
    
     this.body = Bodies.circle(x, y, radius, options);
     this.r = radius;
     this.x = x;
     this.y = y;
     World.add(world, this.body);
     this.image = loadImage("Plucking mangoes/mango.png")
   }

   show()
   {
       
       image(this.image, this.x, this.y, this.r, this.r )
       imageMode(CENTER)
      // ellipse(this.x, this.y, this.r)
   }

}