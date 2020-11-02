class tree {

constructor(x, y) {

var options = {isStatic: true}

this.x=x;
this.y=y;
this.treeWidth=450;
this.treeHeight=600;
this.wallThickness=10;

this.image = loadImage("tree.png")
this.bottomBody=Bodies.rectangle(this.x, this.y, this.treebinWidth, this.wallThickness, options)
World.add(world, this.bottomBody);

this.leftWallBody=Bodies.rectangle(0, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, options)
World.add(world, this.leftWallBody);

this.rightWallBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, options)
World.add(world, this.rightWallBody);

}

display() {

var bottompos = this.bottomBody.position

push();
translate(bottompos.x, bottompos.y+10);
fill(255)
imageMode(CENTER)
image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
pop();

}

}