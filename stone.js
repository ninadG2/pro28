class stone
{

   constructor(x,y,width,height)
   {
    this.body = Bodies.rectangle(x, y, width, height)
    this.width = width;
    this.height = height;
    World.add(world, this.body)
    this.image = loadImage("Plucking mangoes/stone.png")

   }

   display()
   {
     var stonePos = this.body.position;
     image(this.image, stonePos.x, stonePos.y, this.width, this.height)
     imageMode(CENTER)
   }

  

}