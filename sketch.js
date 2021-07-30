const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Render=Matter.Render;

var myengine,myworld;

var bg, thiefimg,thief, guard,guardimg,bank;
var database,gameState=0,game,player,playerCount,form,players,allPlayers;
var x,y;
var distance=0;
var back;

function preload()
{
    bg = loadImage("images/bg4.png");
    thiefimg = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
    guardimg = loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png","images/p6.png","images/p7.png","images/p8.png") 
    bank=loadImage("images/BG2.png")
}

function setup()
{
    createCanvas(1330,650);

    myengine=Engine.create();
   myworld=myengine.world;

    database=firebase.database();

game = new Game();
game.getState();
game.start();


var render = Render.create({
    element: document.body,
    engine: myengine,

    options: {
      width: 1330,
      height: 650,
      wireframes: false
    }
  });

  Render.run(render);

}

function draw()
{
    background(bank);
    Engine.update(myengine);

if(playerCount===2)
{
    game.update(1);
}


if(gameState===1)
{
    clear();

    game.play();
}
    


}

