import "./style.css";
import player from "./player.png";
import enemy1 from "./enemy_1.png";
import background_single from "./background_single.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = 800;
canvas.height = 720;

class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' ||
        'ArrowUp' ||
        'ArrowDown' ||
        'ArrowLeft' && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
      console.log(this.keys);
    })
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowDown' ||
        'ArrowUp' ||
        'ArrowLeft' ||
        "ArrowRight") {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(this.keys);
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
    this.y = 0;
  }
  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
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
p.draw(ctx);


function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  window.requestAnimationFrame(animate);
}


