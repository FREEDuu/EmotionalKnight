import { Container } from "pixi.js";
import { engine } from "../../../getEngine";
import { InputText } from "../../../ui/InputText";
import { MyBackground } from "../../../ui/MyBackground";
import { Button } from "../../../ui/Button";
import { BackButton } from "../../../ui/BackButton";

/** The screen that holds the app */
export class RoomJoinScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];
    private inputIdRoom: InputText
    private bg: MyBackground  = new MyBackground();
    private backButton: Button = new BackButton();

    constructor() {
        super();

        this.addChild(this.bg);
        this.addChild(this.backButton);

        this.inputIdRoom = new InputText();
        this.addChild(this.inputIdRoom);

    }

  /** Prepare the screen just before showing */
  public prepare() {}

  /** Fully reset */
  public reset() {}

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {

    this.bg.resize(width, height);

    this.inputIdRoom.x =  width / 2 - (this.inputIdRoom.width / 2);
    this.inputIdRoom.y = height / 2 - (this.inputIdRoom.height / 2);    
    this.backButton.resize(width, height, +200);
    this.inputIdRoom.resize(width, height, -200);

  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}