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

// Função para obter o array do localStorage
function getGameDataFromLocalStorage() {
  var storedData = localStorage.getItem("gameData");
  return storedData ? JSON.parse(storedData) : [];
}

// Função para criar e adicionar os cards ao componente
function renderGameCards() {
  var gamesArray = getGameDataFromLocalStorage();
  var gridContainer = document.querySelector(".grid-container");

  // Limpa o conteúdo existente dentro do gridContainer
  gridContainer.innerHTML = "";

  // Mapeia cada item do array e cria um card para cada item
  gamesArray.forEach(function (gameData) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.textContent = gameData.name; // Por exemplo, exibindo apenas o nome do jogo
    card.t

    // Adiciona o card ao gridContainer
    gridContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderGameCards();
});
