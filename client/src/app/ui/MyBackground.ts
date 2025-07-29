import type { SpriteOptions } from "pixi.js";
import { Sprite } from "pixi.js";

/**
 * A Text extension pre-formatted for this app, starting centred by default,
 * because it is the most common use in the app.
 */
export class MyBackground extends Sprite {
  constructor(opts?: SpriteOptions) {
    super({ ...opts });
    this.texture = Sprite.from("background.png").texture;
    this.anchor.set(0.5);
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.position.set(width * 0.5, height * 0.5);
  }
}
