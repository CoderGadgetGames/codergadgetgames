const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

function game1Mod() {
  const createGameOpenWindow = document.querySelector("#GameOneModel");
  const openGameOneWindow = createGameOpenWindow.innerHTML('<div class="modal-dialog modal-dialog-scrollable"> . . . </div>')
}