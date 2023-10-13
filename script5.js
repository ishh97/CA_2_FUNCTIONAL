const correctDiv = document.querySelectorAll(".correct");
console.log(correctDiv)
const playerScore = document.getElementById('score');
const lives = document.getElementById('lives');
const diffFound = document.getElementById('diff');
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const five = document.querySelectorAll(".five");
const six = document.querySelectorAll(".six");
const seven = document.querySelectorAll(".seven");
const eight = document.querySelectorAll(".eight");
const nine = document.querySelectorAll(".nine");
const ten = document.querySelectorAll(".ten");
var score =0;
var live =5;
var diff =0;
var flag1 =true;
var flag2 =true;
var flag3 =true;
var flag4 =true;
var flag5 =true;
var flag6 =true;
var flag7=true;
var flag8 =true;
var flag9 =true;
var flag10 =true;


const scoreIncreaseAudio = new Audio("/assests/score_increase.wav");
scoreIncreaseAudio.volume = 0.5;
const scoreDecreaseAudio = new Audio("/assests/score_decrease.mp3");
scoreDecreaseAudio.volume = 0.5;
one.forEach(div => {
    div.addEventListener('click', function() {
        if (flag1) {
            flag1 = false;
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            playerScore.innerHTML= score
            one.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // one.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

two.forEach(div => {
    div.addEventListener('click', function() {
        if (flag2) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag2 = false;
            playerScore.innerHTML= score
            two.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // two.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

three.forEach(div => {
    div.addEventListener('click', function() {
        if (flag3) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag3 = false;
            playerScore.innerHTML= score
            three.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // three.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

four.forEach(div => {
    div.addEventListener('click', function() {
        if (flag4) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag4 = false;
            playerScore.innerHTML= score
            four.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

five.forEach(div => {
    div.addEventListener('click', function() {
        if (flag5) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag5 = false;
            playerScore.innerHTML= score
            five.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
             });
            // five.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

six.forEach(div => {
    div.addEventListener('click', function() {
        if (flag6) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag6 = false;
            playerScore.innerHTML= score
            six.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});

seven.forEach(div => {
    div.addEventListener('click', function() {
        if (flag7) {
            score+=2
            Score()
            flag7 = false;
            diff++
            diffFound.innerHTML = diff
            playerScore.innerHTML= score
            seven.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});
eight.forEach(div => {
    div.addEventListener('click', function() {
        if (flag8) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag8 = false;
            playerScore.innerHTML= score
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            eight.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });            
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});
nine.forEach(div => {
    div.addEventListener('click', function() {
        if (flag9) {
            score+=2
            Score()
            flag9 = false;
            playerScore.innerHTML= score
            diff++
            diffFound.innerHTML = diff
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            nine.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            console.log(score)
            checkWin();
            scoreIncreaseAudio.play();
        }
    });
});
ten.forEach(div => {
    div.addEventListener('click', function() {
        if (flag10) {
            score+=2
            Score()
            diff++
            diffFound.innerHTML = diff
            flag10 = false;
            playerScore.innerHTML= score
            // div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            ten.forEach(div => {
                div.style.backgroundColor ="rgba(173, 255, 47, 0.75)"
            });
            console.log(score)
            checkWin();
            console.log('Playing audio...');
            scoreIncreaseAudio.play();
        }
    });
});
const grid = document.querySelectorAll(".grid");

grid.forEach(div => {
    div.addEventListener('click', function() {
        if (!div.classList.contains("correct")) {
            score--;
            Score()
            live--;
            playerScore.innerHTML = score;
            lives.innerHTML= live
            scoreDecreaseAudio.play();

            if (live <= 0) {
                window.location.href = "lose.html";
            }
        }
    });
});
function checkWin() {
    if (diff === 10) {
        window.location.href = "win.html";
    }
}

function Score() {
    localStorage.setItem('score' , score);
    console.log("hi")
}
