var State,playerCount,hurdle,player,game,form;
var a,b,c,d,e,f;

function preload(){
  a=loadImage("Runner 1.png");
  b=loadImage("Runner 2.png");
  c=loadImage("Runner 3.png");
  d=loadImage("Runner 4.png");
  e=loadImage("Runner 5.png");
  f=loadImage("Runner 6.png");
}

function setup() {
  createCanvas(1360,625);
  State=0;
  player=new Player();
  form=new Form();
}

function draw() {
  background(255);
  form.form();
  
  if(State===0){
  if(player.num===1){
    image(a,750,200,300,300);
  }
  if(player.num===2){
    image(b,750,200,300,300);
  }
  if(player.num===3){
    image(c,750,200,300,300);
  }
  if(player.num===4){
    image(d,750,200,500,300);
  }
  if(player.num===5){
    image(e,750,200,300,300);
  }
  if(player.num===6){
    image(f,750,200,300,300);
  }
}

  console.log("Runner "+player.num+".png");


}