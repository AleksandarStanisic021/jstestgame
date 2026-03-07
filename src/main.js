import './style.css'
import player from './player.png';
import enemy1 from './enemy_1.png';
import background_single from './background_single.png'

let playerImage = new Image();
playerImage.src = background_single;

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


console.log(player, enemy1, background_single);


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(playerImage, 0, 0, canvas.width, canvas.height);
  window.requestAnimationFrame(animate)
}


animate();


