class Arrow{
   constructor(m,a){
      var order1 ={
          restitution:0,
       friction:10,
       isStatic:true

       }
       this.body=Bodies.rectangle(m,a,100,100,order1);
       World.add(world,this.body);

     this.image=loadImage("ar2.png")
   }
   
   
   
   
   display(){
                      imageMode(CENTER)
                      
                      strokeWeight(1)
                  image (this.image,this.body.position.x,this.body.position.y,100,100);
   }

   

   }
   