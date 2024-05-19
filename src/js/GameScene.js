import GameBg from "./GameBg.js";
import Bird from "./Bird.js";
import ParalelleXMovement from "./ParalelleXMove.js";
import { Constant } from "./Constant.js";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
    this.gameBg = null;
    this.bird = null;
    this.paraMove = null;
    this.speed = 6;
    this.timeInSec = 0;
  }
  init() {
    this.gameBg = new GameBg(this);
    this.bird = new Bird(this);
    this.paraMove = new ParalelleXMovement(this);
  }
  preload() {}
  create() {
    // this.GetData();
    this.gameBg.CreateBg();
    this.bird.CreateBird();
    this.paraMove.CreatePillers();
    // setTimeout(() => {
    this.bool = true;
    this.myTimerEvent = this.time.addEvent({
      delay: 1000,
      callback: this.OnDistanceCover,
      callbackScope: this,
      loop: true,
    });
    this.myTimerEvent.paused = false;
    // }, 3000);
  }
  OnCollide() {
    console.log("gameOver");
    this.scene.bool = false;
    // this.myTimerEvent.paused = true;
    Constant.game.scene.stop("GameScene");
    Constant.game.scene.start("MenuScene");
  }
  OnDistanceCover() {
    this.timeInSec += 1;
    if (this.timeInSec > 60) {
      this.speed = 20;
    }
  }
  update() {
    if (this.bool) {
      this.gameBg.MoveBg();
      this.paraMove.MoveUpperPillers();
      this.paraMove.MoveBottomPillers();

      if (Phaser.Input.Keyboard.JustDown(this.bird.spacebar)) {
        this.bird.OnBackgroundClicked();
      }
    }
  }

  // async GetData() {
  //   try {
  //     let response = await fetch("https://dummyapi.online/api/movies");
  //     let data = await response.json();
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // }
}
