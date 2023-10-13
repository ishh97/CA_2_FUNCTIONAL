const loseAudio = new Audio("/assests/player-losing-or-failing.wav");
loseAudio.volume = 0.4;
window.addEventListener('load', function() {
    loseAudio.play();
    console.log("hello")
});

const phrases = ["Yikes ╯︿╰ ", 'Oh-Oh :-(', 'Uh-huh ?', 'Umm', 'Zzzzz', 'Hmph', 'Whoop-de-do', 'Tsk-tsk', 'Whoopsie!', 'Ouch !', 'Boo', 'OOPS!']
const message = document.getElementById('lose-mess')
index = Math.round(Math.floor(Math.random()*12));
message.innerHTML =phrases[index]


const score = document.getElementById('lose-score');
var finalScore = localStorage.getItem('score')
var userName = localStorage.getItem('playerName')
console.log(`${userName} 's Score is : ${finalScore}`)
score.innerHTML = finalScore;