import { Container } from "pixi.js";
import { engine } from "../../../getEngine";
import { Button } from "../../../ui/Button";
import { RoomCreationScreen } from "./RoomCreationScreen";
import { RoomJoinScreen } from "./RoomJoinScreen";
import { MyBackground } from "../../../ui/MyBackground";

/** The screen that holds the app */
export class RoomChoiceScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];

    private newRoomButton: Button;
    private joinRoomButton: Button;
    private bg: MyBackground = new MyBackground();

    constructor() {
        super();
        this.addChild(this.bg);

        this.newRoomButton = new Button({
        text: "create a room",
        });

        this.addChild(this.newRoomButton);

        this.joinRoomButton = new Button({
        text: "join a room"
        });

        this.addChild(this.joinRoomButton);

        this.joinRoomButton.onPress.connect(() => {engine().navigation.showScreen(RoomJoinScreen)});
        this.newRoomButton.onPress.connect(() => {engine().navigation.showScreen(RoomCreationScreen)});
    }

  /** Prepare the screen just before showing */
  public prepare() {}

  /** Fully reset */
  public reset() {}

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {

    this.bg.resize(width, height);

    this.newRoomButton.resize(width, height, +200);
    this.joinRoomButton.resize(width, height, -200);

  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}