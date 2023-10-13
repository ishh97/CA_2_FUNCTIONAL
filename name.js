const playerName = document.getElementById("username");
// const playerName = usernameInput.value;
const plyBtn = document.getElementById('user-play');

playerName.addEventListener("input", function() {
  const userName = playerName.value;
  localStorage.setItem('playerName', userName);
  console.log(localStorage.getItem('playerName'));

  if (userName.trim() ==="") {
    plyBtn.disabled = true;
  }
  else {
    plyBtn.disabled=false ;
  }
});

plyBtn.addEventListener("click", function(event) {
  if (playerName.value.trim() === "") {
      alert("Please enter your name before playing.");
      event.preventDefault();
  }
});

console.log(localStorage.getItem('playerName'));


