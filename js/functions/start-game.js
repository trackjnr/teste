// ✅ Importation des fonctions nécessaires
import { logEvent } from "../utils/utils.js";  // Importation de logEvent

import { updateGame } from "./update-game.js"; 

// ✅ Sélection des éléments HTML avec vérification
export const gameContainer = document.getElementById("game-container");
export const canvas = document.getElementById("gameCanvas");

if (!canvas) {
    logEvent("error", "L'élément #gameCanvas est introuvable !");
} else {
const ctx = canvas.getContext("2d");
    logEvent("success", "Canvas détecté et contexte 2D récupéré.");
}

/*------------------------------------------------------------------
--                  Variables du jeu
------------------------------------------------------------------*/
let gameRunning = false;
let player = { x: 50, y: 200, width: 30, height: 30, dy: 0 };
let gravity = 0.5;
let obstacles = [];
let score = 0;
let secretCode = "";

/*------------------------------------------------------------------
--                  Gestion des événements clavier
------------------------------------------------------------------*/

// ✅ Gestion des erreurs lors de l'écoute des touches
try {
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

    logEvent("success", "Gestionnaire d'événements clavier initialisé.");
} catch (error) {
    logEvent("error", "Erreur lors de l'ajout de l'event listener clavier.", { error });
}

/*------------------------------------------------------------------
--                  Vérification des fonctions importées
------------------------------------------------------------------*/
try {
    if (typeof startGame !== "function") {
        throw new Error("La fonction startGame() est introuvable !");
    }
    logEvent("success", "La fonction startGame() est bien importée.");
} catch (error) {
    logEvent("error", error.message);
}

try {
    if (typeof updateGame !== "function") {
        throw new Error("La fonction updateGame() est introuvable !");
    }
    logEvent("success", "La fonction updateGame() est bien importée.");
} catch (error) {
    logEvent("error", error.message);
}

logEvent("success", "✅ Script chargé avec succès !");
