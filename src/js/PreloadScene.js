import { Constant } from "./Constant.js";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
    this.fonts = {
      "Roboto-Bold": null,
      "Roboto-Light": null,
      "RobotoCondensed-Regular": null,
      "Montserrat-Bold": null,
    };
  }
  preload() {}
  create() {
    this.loadFonts();
  }
  /**
   * loading fonts
   */
  loadFonts() {
    let propName = Object.getOwnPropertyNames(this.fonts);
    propName.forEach((fontName, index) => {
      let isLast = index >= propName.length - 1;
      this.fonts[fontName] = new FontFaceObserver(fontName);

      this.fonts[fontName]
        .load()
        .then(
          this.FontLoadSuccess.bind(this, fontName, isLast),
          this.FontLoadError.bind(this, fontName)
        );
    });
  }
  /***
   * on successfont load this method will be called
   * only then the assets will be loaded
   */
  FontLoadSuccess(fontName, isLast) {
    if (isLast) {
      this.loadAssets();
    }
  }
  /**
   * If we face any kind of error at the time of loading fonts
   * here we will be able to see the specific error
   * @param {font name} fontName
   */
  FontLoadError(fontName, error) {
    // console.log(`Font load error for ${fontName}:`, error);
  }
  /**
   * loading all the assets required for the game
   */
  loadAssets() {
    this.load.on("progress", this.loadProgress, this);
    this.load.on("complete", this.OnComplete, { scene: this.scene });
    this.load.image("bird", "assets/images/bird.png");
    this.load.image("piller", "assets/images/piller.png");
    this.load.image("bg", "assets/images/bg.png");
    this.load.start();
  }
  loadProgress() {}
  OnComplete() {
    Constant.game.scene.stop("PreloadScene");
    Constant.game.scene.start("MenuScene");
  }
  update() {}
}
