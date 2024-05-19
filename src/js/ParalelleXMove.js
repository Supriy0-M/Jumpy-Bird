class ParalelleXMovement {
  constructor(scene) {
    this.scene = scene;
    this.numberOfPillers = 3;
    this.upperPillerArray = [];
    this.lastIndex = null;
    this.lastIndexDown = null;
    this.bottomPillerArray = [];
  }
  CreatePillers() {
    this.CreateUpperPillers();
    this.CreateBottomPillers();
  }
  CreateUpperPillers() {
    let randomY;
    for (let i = 0; i < this.numberOfPillers; i++) {
      randomY = this.RandomNumberGenerator(-300, 0);
      let piller = this.scene.physics.add
        .image(540 + i * 600, 420 + randomY, "piller")
        .setOrigin(1, 0.5)
        .setScale(200, 800)
        .setTint("0X53DE37");
      piller.body.immovable = true;
      piller.body.allowGravity = false;
      this.upperPillerArray.push(piller);
      this.scene.physics.add.collider(
        this.scene.bird.bird,
        piller,
        this.scene.OnCollide,
        null,
        this
      );
    }
    this.lastIndex = this.upperPillerArray.length - 1;
  }
  MoveUpperPillers() {
    for (let i = 0; i < this.upperPillerArray.length; i++) {
      this.upperPillerArray[i].x -= this.scene.speed * 1.8;
      if (this.upperPillerArray[i].x < 0) {
        this.upperPillerArray[i].x =
          this.upperPillerArray[this.lastIndex].x +
          this.RandomNumberGenerator(600, 1100);

        console.log("enter", this.upperPillerArray[this.lastIndex].x);

        this.lastIndex = i;
      }
    }
  }
  RandomNumberGenerator(_min, _max) {
    return Math.floor(Math.random() * (_max - _min)) + _min;
  }

  CreateBottomPillers() {
    let randomY, randomX;
    for (let i = 0; i < this.numberOfPillers; i++) {
      randomY = this.RandomNumberGenerator(-300, 0);
      randomX = this.RandomNumberGenerator(600, 700);
      let piller = this.scene.physics.add
        .image(540 + i * randomX, 1560 - randomY, "piller")
        .setOrigin(1, 0.5)
        .setScale(200, 800)
        .setTint("0X53DE37");
      piller.body.immovable = true;
      piller.body.allowGravity = false;
      this.bottomPillerArray.push(piller);

      this.scene.physics.add.collider(
        this.scene.bird.bird,
        piller,
        this.scene.OnCollide,
        null,
        this
      );
    }
    this.lastIndexDown = this.bottomPillerArray.length - 1;
  }

  MoveBottomPillers() {
    for (let i = 0; i < this.bottomPillerArray.length; i++) {
      this.bottomPillerArray[i].x -= this.scene.speed * 1.8;
      if (this.bottomPillerArray[i].x < 0) {
        this.bottomPillerArray[i].x =
          this.bottomPillerArray[this.lastIndexDown].x +
          this.RandomNumberGenerator(600, 1100);

        this.lastIndexDown = i;
      }
    }
  }
}
export default ParalelleXMovement;
