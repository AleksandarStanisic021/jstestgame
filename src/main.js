import "./style.css";
import player from "./player.png";
import enemy1 from "./enemy_1.png";
import background_single from "./background_single.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let playerImage=new Image();
playerImage.src=player;


canvas.width = 800;
canvas.height = 720;

class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    })
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowDown' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowLeft' ||
        e.key === "ArrowRight") {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    })
  }
}

class background {

}



class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.height = 200;
    this.width = 200;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.image=playerImage;
    this.frameX=0;
    this.frameY=0;
  }
  draw(context) {
   
    context.drawImage(
      this.image,
      this.frameX*this.width,
      this.frameY*this.height,
      this.width,
      this.height,
      this.x,this.y,
      this.width,
      this.height);//i frame
  }
  update() {
    this.x++;
    if(this.x>this.gameWidth)this.x=0
  }
}

class Enemy {

}

function handleEnemy() {
}

function displayStatus() {

}


const input = new InputHandler();
let p = new Player(canvas.width, canvas.height);



function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  p.draw(ctx);
  p.update();

  window.requestAnimationFrame(animate);
}
animate();

