import { Container } from "pixi.js";
import { engine } from "../../../getEngine";
import { FancyButton} from "@pixi/ui";
import { Button } from "../../../ui/Button";
import { RoomCreationScreen } from "./RoomCreationScreen";
import { RoomJoinScreen } from "./RoomJoinScreen";

/** The screen that holds the app */
export class RoomChoiceScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];

    public mainContainer: Container;
    private newRoomButton: FancyButton;
    private joinRoomButton: FancyButton;

    constructor() {
        super();

        this.mainContainer = new Container();
        this.addChild(this.mainContainer);

        this.newRoomButton = new Button({
        text: "create a room",
        width: 320,
        height: 320,
        });

        this.addChild(this.newRoomButton);

        this.joinRoomButton = new Button({
        text: "join a room",
        width: 320,
        height: 320,
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
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    this.mainContainer.x = centerX;
    this.mainContainer.y = centerY;
    this.newRoomButton.x = width / 2 ;
    this.newRoomButton.y = height / 2 + 200;
    this.joinRoomButton.x = width / 2 ;
    this.joinRoomButton.y = height / 2 - 200;

  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}