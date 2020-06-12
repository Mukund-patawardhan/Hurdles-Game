class Form{
    constructor(){
      this.nameInput=createInput("Type Name Here");
      this.playerInput=createSlider(1,6,1,1);
      this.submit=createButton("Submit");
      this.greeting=createElement("h2");
      this.heading=createElement("h1");
      this.number=createElement("h2");
      this.info1=createElement("h4");
    }

    form(){
    
      
      player.console();

      this.nameInput.position(100,300);
      this.playerInput.position(400,300);
      this.submit.position(200,500);
      this.heading.html("Hurdles Game");
      this.heading.position(300,100);
      this.number.html(this.playerInput.value());
      this.number.position(450,250);
      this.info1.html("Move Slider to change Character");
      this.info1.position(400,330);
      console.log(this.playerInput.value());
      player.num=this.playerInput.value();

      this.submit.mousePressed(()=>{
          this.nameInput.hide();
          this.playerInput.hide();
          this.number.hide();
          this.submit.hide();
          this.info1.hide();
          player.name=this.nameInput.value();
          playerCount+=1;
          State=1;
          player.number=this.playerInput.value();
          this.greeting.html("Hello "+player.name+"!!  Welcome to the Hurdles Game Player "+player.number);
          this.greeting.position(200,300);
          
      })
    }
}
