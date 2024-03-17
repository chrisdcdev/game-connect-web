function handleSubmitForm() {
    document
      .getElementById("game-form")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que o formulário seja submetido normalmente

        // Obtém os valores dos campos do formulário
        var gameData = {
          name: document.getElementById("game-name").value,
          description: document.getElementById("game-description").value,
          image: document.getElementById("game-image").value,
          genre: document.getElementById("game-genre").value,
          mode: document.getElementById("game-mode").value,
          trophies: document.getElementById("game-trophies").value,
          platform: document.getElementById("game-platform").value,
        };

        // Converte os dados em JSON
        var jsonData = JSON.stringify(gameData);

        // Armazena os dados no localStorage
        console.log(jsonData);
        localStorage.setItem("gameData", jsonData);

        // Exibe uma mensagem de sucesso
        alert("Dados do jogo foram salvos com sucesso!");

        // Limpa o formulário
        document.getElementById("game-form").reset();
      });
}
