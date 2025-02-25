import { gameRunning, player, obstacles, score, gameContainer } from "../main.js";
import { updateGame } from "./update-game.js";



/*----------------------------------------------------------------------------------------------------
// Fonction pour démarrer le jeu
/*----------------------------------------------------------------------------------------------------
*
 * startGame.js
 *
 * Initialise et démarre le jeu en réinitialisant les variables et en lançant la boucle de mise à jour.
 * 
 * @param {HTMLElement} gameContainer - Conteneur du jeu
 * @param {Object} player - Objet représentant le joueur
 * @param {Array} obstacles - Tableau des obstacles
 * @param {number} score - Score du joueur
 * @param {boolean} gameRunning - Indicateur d'état du jeu
 * @param {Function} updateGame - Fonction de mise à jour du jeu
 *----------------------------------------------------------------------------------------------------------
 * @function startGame
 * @returns {void}
/**
 * Démarre le jeu en réinitialisant les variables et en lançant la boucle de mise à jour.
 * 
 * @function startGame
 * @returns {void}
 */
export function startGame() {
    if (getGameState()) return; // Vérifie si le jeu est déjà en cours
    setGameState(true); // Démarre le jeu

    resetPlayer(); // Réinitialise le joueur
    resetObstacles(); // Vide les obstacles
    resetScore(); // Remet le score à 0

    gameContainer.classList.remove("hidden"); // Affiche le jeu
    updateGame(); // Démarre la mise à jour du jeu
}
