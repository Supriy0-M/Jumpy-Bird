import { Constant } from "./Constant.js";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
    this.counter = 3;
  }
  create() {
    this.countText = this.add
      .text(540, 960, "3", {
        fontFamily: "Roboto-Bold",
        fontSize: "250px",
        fill: "#3A6FB6",
        fontStyle: "bold",
        align: "center",
      })
      .setOrigin(0.5);
    this.counter = 3;
    this.time.addEvent({
      delay: 1000,
      callback: this.onRepeatEvent,
      callbackScope: this,
      loop: true,
    });
  }
  onRepeatEvent() {
    this.counter -= 1;
    this.countText.setText(this.counter);
    if (this.counter == 0) {
      Constant.game.scene.start("GameScene");
    }
  }
}
