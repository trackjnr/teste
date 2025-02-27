// Exportation des variables globales du jeu
import { startGame } from "./functions/start-game";
import { gameRunning } from(startGame)


// Sélection des éléments HTML
export const gameContainer = document.getElementById("startGame");
export const canvas = document.getElementById("updateGame");
export const ctx = canvas.getContext("2d");


console.log(startGame(5, 3)); // 8
console.log(updateGame(10, 4)); // 6
/*------------------------------------------------------------------
--                  Variables du jeu
--------------------------------------------------------------------------*/
let gameRunning = false;
let player = { x: 50, y: 200, width: 30, height: 30, dy: 0 };
let gravity = 0.5;
let obstacles = [];
let score = 0;
let secretCode = "";

// Gestion du saut
document.addEventListener("keydown", (e) => {
if (e.code === "Space" && gameRunning) {
        player.dy = -7; // Saut
}
});

// Ouvrir le jeu en appuyant sur un code secret (ex: "play")

document.addEventListener("keydown", (e) => {
if (e.code === "Space" && gameRunning) {
player.dy = -7; // Saut
}

// Ajout des touches pour le code secret
//     secretCode += e.key.toLowerCase();
if (secretCode.endsWith("play")) { // Vérifie si le code est bien entré dans l'ordre
startGame();
secretCode = ""; // Réinitialiser après lancement
}
});
