/**
 * all the constant variables that wouldn't be changed through out the game
 * is over here
 */
class Constant {
  constructor() {
    this.game = null;
    this.isMobile = null;
    this.scaleFactor = null;
    this.scaleFactorX = null;
    this.scaleFactorY = null;
    this.currentAspectRatio = null;
    this.originalAspectRatio = null;
    this.currentRatio = null;
  }
}

let constant = new Constant();
export { constant as Constant };
