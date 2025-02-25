import { gameRunning, player, gravity, obstacles, score, gameContainer, ctx } from "../main.js";


    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.dy += gravity;
    player.y += player.dy;

    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
    }

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    if (Math.random() < 0.02) {
        obstacles.push({ x: canvas.width, y: canvas.height - 20, width: 20, height: 20 });
    }

    ctx.fillStyle = "red";
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 3;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameRunning = false;
            alert("💥 GAME OVER ! Score : " + score);
            gameContainer.classList.add("hidden");
            return;
        }
    }

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    score++;

    requestAnimationFrame(updateGame);


// Fonction pour mettre à jour le jeu
/*---------------------------------------------------------------------------------------------------
 * Met à jour l'état du jeu à chaque frame.
 * 
 * - Applique la gravité au joueur.
 * - Empêche le joueur de sortir du cadre.
 * - Dessine le joueur et les obstacles.
 * - Vérifie les collisions entre le joueur et les obstacles.
 * - Affiche le score et met à jour le jeu via `requestAnimationFrame`.
 * 
 * @function updateGame
 * @returns {void}
 */

    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.dy += gravity;
    player.y += player.dy;

    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
    }

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    if (Math.random() < 0.02) {
        obstacles.push({ x: canvas.width, y: canvas.height - 20, width: 20, height: 20 });
    }

    ctx.fillStyle = "red";
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 3;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameRunning = false;
            alert("💥 GAME OVER ! Score : " + score);
            gameContainer.classList.add("hidden");
            return;
        }
    }

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    score++;

    requestAnimationFrame(updateGame);

    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /**
     * Appliquer la gravité au joueur.
     * @type {number}
     */
    player.dy += gravity;
    player.y += player.dy;

    /**
     * Empêcher le joueur de sortir du cadre.
     */
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
    }

    /**
     * Dessiner le joueur.
     */
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    /**
     * Générer des obstacles aléatoirement avec une probabilité de 2% par frame.
     */
    if (Math.random() < 0.02) {
        obstacles.push({ x: canvas.width, y: canvas.height - 20, width: 20, height: 20 });
    }

    /**
     * Déplacer et dessiner les obstacles.
     */
    ctx.fillStyle = "red";
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 3;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        /**
         * Vérification de la collision entre le joueur et un obstacle.
         */
        if (
            player.x < obstacles[i].x + obstacles[i].width &&
            player.x + player.width > obstacles[i].x &&
            player.y < obstacles[i].y + obstacles[i].height &&
            player.y + player.height > obstacles[i].y
        ) {
            gameRunning = false;
            alert("💥 GAME OVER ! Score : " + score);
            gameContainer.classList.add("hidden");
            return;
        }
    }

    /**
     * Affichage du score.
     */
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    score++;

    /**
     * Demande une nouvelle frame pour continuer le jeu.
     */
    requestAnimationFrame(updateGame);


