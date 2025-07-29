
import { Input } from "@pixi/ui";

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
export class InputText extends Input {
  constructor(options: Partial<ButtonOptions> = {}) {
    const opts = { ...defaultButtonOptions, ...options };

    super({
      
      bg: "newButton.png",
      placeholder:"insert room ID",
      align: "center",
      maxLength: 6,
      textStyle: {
        fill: '#000000',
        fontSize: 130,
        fontFamily: "Font",
        },
    });

    this.width = opts.width;
    this.height = opts.height;

  }

  public resize(width: number, height: number, offset: number = 0) {
    this.x = width / 2 - (this.width / 2);
    this.y = height / 2 - (this.height / 2) + offset;
  }

}
