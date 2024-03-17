function handleSubmitForm() {
  var gameData = {
    name: document.getElementById("game-name").value,
    description: document.getElementById("game-description").value,
    image: document.getElementById("game-image").value,
    genre: document.getElementById("game-genre").value,
    mode: document.getElementById("game-mode").value,
    trophies: document.getElementById("game-platform").value,
    platform: document.getElementById("game-trophies").value,
  };

  var storedData = localStorage.getItem("gameData");
  var gamesArray = storedData ? JSON.parse(storedData) : [];
  gamesArray.push(gameData);
  localStorage.setItem("gameData", JSON.stringify(gamesArray));

  alert("Dados do jogo foram salvos com sucesso!");

  document.getElementById("game-form").reset();
}