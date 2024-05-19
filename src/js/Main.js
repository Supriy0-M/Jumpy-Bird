/**
 * here basically i am configuring the game for differnt devices
 * with specific height and width
 *
 * Creating instances(objects) for GameScene and preload scene calculating scaleFactor aspectRatio
 */
import { Constant } from "../js/Constant.js";
import PreloadScene from "../js/PreloadScene.js";
import MenuScene from "./MenuScene.js";
import GameScene from "../js/GameScene.js";

// Create instances of scenes
let preloadScene = new PreloadScene();
let menuScene = new MenuScene();
let gameScene = new GameScene();

window.onload = function () {
  Constant.isMobile =
    /iPhone|iPhoneX|iPod|BlackBerry|kindle|playbook|Windows Phone|Android/i.test(
      navigator.userAgent
    );

  let config;
  if (Constant.isMobile) {
    config = {
      type: Phaser.WEBGL,
      backgroundColor: 0x222222,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          // debug: true,
        },
      },
      width: window.innerWidth,
      height: window.innerHeight, // Fixed typo: 'height' to 'height'
    };
  } else {
    config = {
      type: Phaser.AUTO,
      backgroundColor: 0x222222,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 100 },
          // debug: true,
        },
      },
      width: 1080,
      height: 1920,
    };
  }

  // Create a new Phaser.Game instance
  Constant.game = new Phaser.Game(config);
  Constant.scaleFactor = config.height / 1920;
  Constant.scaleFactorX = config.width / 1080;
  Constant.scaleFactorY = config.height / 1920;

  // Set current aspect ratio
  Constant.currentAspectRatio = config.height / config.width;

  // Add scenes to the game
  Constant.game.scene.add("PreloadScene", preloadScene);
  Constant.game.scene.add("MenuScene", menuScene);
  Constant.game.scene.add("GameScene", gameScene);

  // Start the preload scene
  Constant.game.scene.start("PreloadScene");
};
