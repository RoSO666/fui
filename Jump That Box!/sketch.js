var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    b1 = createSprite(0,580,360,30)
    b1.shapeColor ="yellow"
    b2 = createSprite(295,580,200,30)
    b2.shapeColor ="blue"
    b3 = createSprite(515,580,200,30)
    b3.shapeColor ="green"
    b4 = createSprite(740,580,220,30)
    b4.shapeColor ="purple"

    



    box = createSprite(random(20,750),100,40,40)
    box.shapeColor = "red"
    box.velocityX = 10
    box.velocityY = 10
    

}

function draw() {
    background(rgb(169,169,169));
   edges= createEdgeSprites()
    
   box.bounceOff(edges)
   if(b1.isTouching(box)&& box.bounceOff(b1)){
       box.shapeColor = "yellow"
       music.play()
   }
   if(b3.isTouching(box)&& box.bounceOff(b3)){
    box.shapeColor = "green"
    music.play()
}
if(b4.isTouching(box)&& box.bounceOff(b4)){
    box.shapeColor = "purple"
    music.play()
}
if(b2.isTouching(box)){
    box.shapeColor = "blue"
    box.velocityX = 0
    box.velocityY = 0
    music.stop();
}

 drawSprites();

    //add condition to check if box touching surface and make it box
}
