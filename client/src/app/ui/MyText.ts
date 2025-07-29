
import { Text, TextOptions } from "pixi.js";

/**
 * The big rectangle button, with a label, idle and pressed states
 */
export class MyText extends Text {
  constructor(options: Partial<TextOptions> = {}) {

    super({
        text: options.text || "",
        style: {
        fill: '#000000',
        fontSize: 36,
        fontFamily: "Font",
        },
        anchor: 0.5
    })

  }

}
