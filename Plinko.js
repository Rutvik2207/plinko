class Plinko{
    constructor(x,y,radius){
         var options={
             isStatic:true
         }
         this.body=Bodies.circle(x,y,this.r,options);
         World.add(world,this.body);
    }

}