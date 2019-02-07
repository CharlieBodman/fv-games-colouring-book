import Boot from './boot';
import Preload from './preload';
import GameTitle from './gametitle';
import Main from './main';
import GameOver from './gameover';
import GameConfig from './config';
import PhaserFloodFill from './libs/PhaserFloodFill';
import CanvasToBlob from './libs/CanvasToBlob';

/**
 * Colouring Book Game
 */
class Game {

    /**
     * Initialize the game
     * @param {HtmlElement} containerElement - container to inject game canvas into
     * @param {object} config - game config
     */
    init(containerElement, config) {

        this.destroy();

        PhaserFloodFill(Phaser);
        CanvasToBlob(window);

        //Set Game Config
        GameConfig.setConfig(config);

        //Start Game
        const game = new Phaser.Game(800, 600, Phaser.CANVAS, containerElement, false, false, true);
        game.state.add("Boot", Boot);
        game.state.add("Preload", Preload);
        game.state.add("GameTitle", GameTitle);
        game.state.add("Main", Main);
        game.state.add("GameOver", GameOver);
        game.state.start("Boot");

        this.game = game;
    }

    /**
     * Destroys game instance and frees up memory
     */
    destroy() {
        if (this.game) {
            this.game.destroy();
            this.game = null;
        }
    }
}

export default new Game();