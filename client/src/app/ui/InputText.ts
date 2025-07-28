
import { Input } from "@pixi/ui";

const defaultButtonOptions = {
  text: "",
  width: 320,
  height: 320,
  fontSize: 36,
};

type ButtonOptions = typeof defaultButtonOptions;

/**
 * The big rectangle button, with a label, idle and pressed states
 */
export class InputText extends Input {
  constructor(options: Partial<ButtonOptions> = {}) {
    const opts = { ...defaultButtonOptions, ...options };

    super({
      bg: "button.png",
      placeholder:"insert room ID",
      align: "center",
      maxLength: 6,
    });

    this.width = opts.width;
    this.height = opts.height;

  }

}
