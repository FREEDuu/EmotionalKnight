import { FancyButton } from "@pixi/ui";

import { engine } from "../getEngine";

import { Label } from "./Label";
import { buttonAnimations } from "../../costants/ButtonAnimation";

const defaultButtonOptions = {
  text: "",
  width: 750,
  height: 512,
  fontSize: 130,
};

type ButtonOptions = typeof defaultButtonOptions;

/**
 * The big rectangle button, with a label, idle and pressed states
 */
export class Button extends FancyButton {
  constructor(options: Partial<ButtonOptions> = {}) {
    const opts = { ...defaultButtonOptions, ...options };

    super({
      defaultView: "newButton.png",
      anchor: 0.5,
      text: new Label({
        text: opts.text,
        style: {
          fill: 0x000000,
          align: "center",
          fontSize: opts.fontSize,
          fontFamily: "Font",
        },
      }),
      defaultTextAnchor: 0.5,
      scale: 0.9,
      animations: buttonAnimations
    });

    this.width = opts.width;
    this.height = opts.height;

    this.onDown.connect(this.handleDown.bind(this));
    this.onHover.connect(this.handleHover.bind(this));
  }

  private handleHover() {
    engine().audio.sfx.play("main/sounds/sfx-hover.wav");
  }

  private handleDown() {
    engine().audio.sfx.play("main/sounds/sfx-press.wav");
  }

  public resize(width: number, height: number, offset: number = 0) {
    this.x = width / 2 ;
    this.y = height / 2 + offset;
  }
}
