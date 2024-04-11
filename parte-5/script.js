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

// Função para obter o array do localStorage teste teste
function getGameDataFromLocalStorage() {
  var storedData = localStorage.getItem("gameData");
  return storedData ? JSON.parse(storedData) : [];
}

// // Função para criar e adicionar os cards ao componente
function renderGameCards() {
  var gamesArray = getGameDataFromLocalStorage();
  var gridContainer = document.querySelector(".grid-container");

  // Limpa o conteúdo existente dentro do gridContainer
  gridContainer.innerHTML = "";

  // Mapeia cada item do array e cria um card para cada item
  gamesArray.forEach(function (gameData) {
    var card = document.createElement("div");
    card.classList.add("card");

    // Configura a a sombra de sobreposição do card
    card.style.backgroundImage = "url(" + gameData.image + ")";

    // Cria e configura a div de sobreposição
    var cardOverlay = document.createElement("div");
    cardOverlay.classList.add("card-overlay");
    card.appendChild(cardOverlay);

    // Adiciona o nome do jogo ao card
    var gameName = document.createElement("span");
    gameName.classList.add("game-name");
    gameName.textContent = gameData.name;
    card.appendChild(gameName);

    // Adiciona o gênero do jogo ao card
    var gameGenre = document.createElement("span");
    gameGenre.classList.add("game-genre");
    gameGenre.textContent = gameData.genre;
    card.appendChild(gameGenre);

    // Adiciona a plataforma do jogo ao card
    var gamePlatform = document.createElement("span");
    gamePlatform.classList.add("game-platform");
    gamePlatform.textContent = gameData.platform;
    card.appendChild(gamePlatform);

    // Adiciona o card ao gridContainer
    gridContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderGameCards();
});
