const winAudio = new Audio("/assests/game-level-completed.wav");
winAudio.volume = 0.4;
window.addEventListener('load', function() {
    winAudio.play();
    console.log("hello")
});



const phrases = ['Amazing', 'Yay!', 'Hooray', 'Whee', 'Fantastic', 'Bravo', 'Alas', 'Ho-Ho'];
const message = document.getElementById('win-mess')
message.innerText=phrases[Math.floor(Math.random()*8)];



const score = document.getElementById('win-score');
var finalScore = localStorage.getItem('score')
var userName = localStorage.getItem('playerName')
console.log(`${userName} 's Score is : ${finalScore}`)
score.innerHTML = finalScore