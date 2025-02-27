// Exportation des variables globales du jeu
import { startGame } from "./functions/start-game.js";
import { logEvent } from "./utils/utils.js";


// Sélection des éléments HTML
export const gameContainer = document.getElementById("startGame");
export const canvas = document.getElementById("updateGame");
export const ctx = canvas.getContext("2d");


console.log(startGame(5, 3)); // 8
console.log(updateGame(10, 4)); // 6
/*------------------------------------------------------------------
--                  Variables du jeu
--------------------------------------------------------------------------*/
export let gameRunning = false;
export let player = { x: 50, y: 200, width: 30, height: 30, dy: 0 };
export let gravity = 0.5;
export let obstacles = [];
export let score = 0;
export let secretCode = "";

document.addEventListener("keydown", (e) => {
    logEvent("info", `Touche pressée: ${e.code}`);

    if (e.code === "Space" && gameRunning) {
        player.dy = -7; // Saut
        logEvent("success", "Le joueur saute !");
    }

    // Ajout des touches au code secret
    secretCode += e.key.toLowerCase();
    logEvent("info", `Code secret en cours : ${secretCode}`);

    if (secretCode.endsWith("play")) {
        logEvent("success", "🎮 Code secret activé, lancement du jeu !");
        startGame();
        secretCode = ""; // Réinitialisation
    }
});