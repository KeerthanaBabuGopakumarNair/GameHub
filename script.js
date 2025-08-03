const games = [
  { name: "Snake", image: "assets/thumbnails/snake.png", path: "games/snake/" },
  { name: "Tetris", image: "assets/thumbnails/tetris.png", path: "games/tetris/" },
  { name: "Pacman", image: "assets/thumbnails/pacman.png", path: "games/pacman/" },
  { name: "2048", image: "assets/thumbnails/2048.png", path: "games/2048/" },
  { name: "Sudoku", image: "assets/thumbnails/sudoku.png", path: "games/sudoku/" },
  { name: "Fireboy & Watergirl", image: "assets/thumbnails/fireboy.png", path: "games/fireboy/" },
  { name: "Mini Golf", image: "assets/thumbnails/golf.png", path: "games/minigolf/" },
  { name: "Snakes & Ladders", image: "assets/thumbnails/sl.png", path: "games/snakes-ladders/" },
  { name: "Ludo", image: "assets/thumbnails/ludo.png", path: "games/ludo/" },
];

const grid = document.getElementById("game-grid");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <img src="${game.image}" alt="${game.name}">
    <p>${game.name}</p>
  `;
  card.onclick = () => window.location.href = `${game.path}index.html`;
  grid.appendChild(card);
});
