class dustbin{
    constructor(x,y,width,height,angle)
    {
 var options=
 {
     'density':0.8,
     'friction':1.0,
     'restitution':0,
     'isStatic':true 
 }
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;
 Matter.Body.setAngle(this.body,angle)
 World.add(world,this.body);
    }
    display()
    {
var pos=this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(4);
stroke('green')
fill('#FF0000')
rectMode(CENTER)
rect(0,0,this.width,this.height);
pop();
    }
}