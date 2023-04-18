import { Game } from "./game";
import { Player } from "./player";
import { getValue } from "./utility";
import { Scoreboard } from "./scoreboard";

let newGame: Game;

document.getElementById("startGame")!.addEventListener("click", () => {
    const player = new Player(getValue("playername"));

    const problemCount: number = Number(getValue("problemCount"));
    const factor: number = Number(getValue("factor"));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById("calculate")!.addEventListener("click", () => {
    newGame.calculateScore();
});