class Block{
    constructor(x,y,width,height){
        var options = {
            'restitution ': 0.8,
            'frictiion ': 1.0,
            'density' : 20,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4)
        stroke("black");
        fill("red");
        rect(pos.x,pos.y,this.width,this,this.height)
        pop();
    }
}