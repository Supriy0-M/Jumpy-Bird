class Bird {
  constructor(scene) {
    this.scene = scene;
    this.bird = null;
  }
  CreateBird() {
    this.bird = this.scene.physics.add
      .image(540, 960, "bird")
      .setOrigin(0.5)
      .setScale(2)
      .setInteractive({ useHandCursor: true });
    this.bird.setGravityY(4000);
    this.bird.setCollideWorldBounds(true);
    this.bird.body.setSize(90, 80, true);

    this.scene.input.on("pointerdown", () => {});
    this.scene.input.on("pointerup", () => {
      this.OnBackgroundClicked();
    });
    this.spacebar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }
  OnBackgroundClicked() {
    this.bird.setVelocityY(-700);
  }
}
export default Bird;
