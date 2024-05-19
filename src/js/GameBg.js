class GameBg {
  constructor(scene) {
    this.scene = scene;
    this.lastIndex = null;
    this.numberOfImages = 3;
    this.backgroundArr = [];
  }
  CreateBg() {
    for (let i = 0; i < this.numberOfImages; i++) {
      let bg = this.scene.add.image(0, 0, "bg").setOrigin(1, 0.5);
      this.backgroundArr.push(bg);
      this.SetPositionOfBg(i);
    }
    this.lastIndex = this.backgroundArr.length - 1;
  }
  SetPositionOfBg(_index) {
    if (_index == 0) {
      this.backgroundArr[_index].setPosition(1080, 960);
    } else if (_index == 1) {
      this.backgroundArr[_index].setPosition(2160, 960);
    } else if (_index == 2) {
      this.backgroundArr[_index].setPosition(3240, 960);
    }
  }
  MoveBg() {
    for (let i = 0; i < this.backgroundArr.length; i++) {
      this.backgroundArr[i].x -= this.scene.speed * 2.2;
      if (this.backgroundArr[i].x < 0) {
        this.backgroundArr[i].x =
          this.backgroundArr[this.lastIndex].x +
          this.backgroundArr[i].width -
          40;
        this.lastIndex = i;
      }
    }
  }
}
export default GameBg;
