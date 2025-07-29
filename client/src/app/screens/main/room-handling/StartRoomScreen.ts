import { animate } from "motion";
import type { ObjectTarget } from "motion/react";
import { Container, Sprite } from "pixi.js";
import { MyBackground } from "../../../ui/MyBackground";

export class StartRoomScreen extends Container {

  private pixiLogo: Sprite;
  private bg: MyBackground = new MyBackground();

  constructor() {
    super();
    this.addChild(this.bg);
    this.pixiLogo = Sprite.from("logo.png");
    this.pixiLogo.anchor.set(0.5);
    this.addChild(this.pixiLogo);
  }

  /** Resize the screen, fired whenever window size changes  */
  public resize(width: number, height: number) {
    this.bg.resize(width, height);
    this.pixiLogo.position.set(width * 0.5, height * 0.5 + 100);
  }

  /** Show screen with animations */
  public async show() {
    this.alpha = 1;
  }

  /** Hide screen with animations */
  public async hide() {
    await animate(this, { alpha: 0 } as ObjectTarget<this>, {
      duration: 1.5,
      ease: "linear",
      delay: 1,
    });
  }

}
