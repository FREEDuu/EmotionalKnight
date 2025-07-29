import { Container } from "pixi.js";
import { engine } from "../../../getEngine";
import { Button } from "../../../ui/Button";
import { MyBackground } from "../../../ui/MyBackground";
import { BackButton } from "../../../ui/BackButton";
import { RoomStartedScreen } from "./RoomStartedScreen";
import { LoadScreen } from "../../LoadScreen";
/** The screen that holds the app */
export class RoomCreationScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];

    private newRoomButton: Button;
    private bg: MyBackground = new MyBackground();
    private backButton: Button = new BackButton();

    constructor() {
        super();

        this.bg = new MyBackground();
        this.bg.anchor.set(0.5);
        this.addChild(this.bg);
        this.newRoomButton = new Button({
        text: "start the game",
        });

        this.addChild(this.backButton);
        this.addChild(this.newRoomButton);
        this.newRoomButton.onPress.connect(() => {

          engine().navigation.showScreen(LoadScreen);
          engine().navigation.showScreen(RoomStartedScreen);
        });
    }

  /** Prepare the screen just before showing */
  public prepare() {}

  /** Fully reset */
  public reset() {}

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {

    this.newRoomButton.resize(width, height, -200);
    this.bg.resize(width, height);
    this.backButton.resize(width, height, +200);
  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}