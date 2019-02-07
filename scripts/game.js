
//Scenes
import Boot from './boot';
import Preload from './preload';
import GameTitle from './gametitle';
import Main from './main';
import GameOver from './gameover';
import GameConfig from './config';

// Libs
import PhaserFloodFill from './libs/PhaserFloodFill';
import CanvasToBlob from './libs/CanvasToBlob';

let game = false;

export default {

    init:(containerElement, config) => {

        if(game === false) {

            PhaserFloodFill(Phaser);
            CanvasToBlob(window);
            
            //Set Game Config
            GameConfig.setConfig(config);

            //Start Game
            game = new Phaser.Game(800, 600, Phaser.CANVAS, containerElement, false, false, true);
            game.state.add("Boot", Boot);
            game.state.add("Preload", Preload);
            game.state.add("GameTitle", GameTitle);
            game.state.add("Main", Main);
            game.state.add("GameOver", GameOver);
            game.state.start("Boot");
        }
    },

    destroy:() => {

        game.destroy();
        game = false;

    }
}
