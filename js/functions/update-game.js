// ✅ Importation des fonctions et outils nécessaires
import { logEvent } from "../utils/utils.js";  
import { gameRunning, player, gravity, obstacles, score, gameContainer, ctx, canvas } from "../script.js";

// ✅ Fonction pour mettre à jour le jeu
export function updateGame() {
    if (!gameRunning) {
        logEvent("warn", "Le jeu est arrêté, updateGame() ne s'exécute pas.");
        return; // Arrête le jeu si gameRunning est false
    }

    if (!ctx || !canvas) {
        logEvent("error", "Canvas ou contexte 2D introuvable !");
        return;
    }

    logEvent("info", "Mise à jour du jeu en cours...");

    // Efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Appliquer la gravité au joueur
    player.dy += gravity;
    player.y += player.dy;

    // Empêcher le joueur de sortir du cadre
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
    }

    // Dessiner le joueur
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Générer des obstacles aléatoirement avec une probabilité de 2% par frame
    if (Math.random() < 0.02) {
        const obstacle = { x: canvas.width, y: canvas.height - 20, width: 20, height: 20 };
        obstacles.push(obstacle);
        logEvent("info", "Nouvel obstacle généré.", obstacle);
    }

    // Déplacer et dessiner les obstacles
    ctx.fillStyle = "red";
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 3;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        // Vérification de la collision entre le joueur et un obstacle
        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameRunning = false;
            logEvent("error", `💥 GAME OVER ! Score final: ${score}`);
            alert(`💥 GAME OVER ! Score : ${score}`);
            gameContainer.classList.add("hidden");
            return;
        }
    }

    // Affichage du score
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    score++;
    logEvent("success", `Score actuel : ${score}`);

    // Demande une nouvelle frame pour continuer le jeu
    requestAnimationFrame(updateGame);
}

// ✅ Lancer la boucle du jeu si elle n'est pas déjà en cours
if (gameRunning) {
    logEvent("success", "Début de la boucle de mise à jour du jeu.");
    requestAnimationFrame(updateGame);
} else {
    logEvent("warn", "Le jeu n'a pas démarré, attente d'activation.");
}
