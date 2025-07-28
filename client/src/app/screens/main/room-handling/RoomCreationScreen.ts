import { Container, Text } from "pixi.js";
import { engine } from "../../../getEngine";
import { FancyButton} from "@pixi/ui";
import { Button } from "../../../ui/Button";
import { randomHash } from "../../../../engine/utils/random";

/** The screen that holds the app */
export class RoomCreationScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];

    public mainContainer: Container;
    private newRoomButton: FancyButton;
    private text: Text;
    private textIdRoom: Text;

    constructor() {
        super();

        var idRoom = randomHash(6).toString();
        this.mainContainer = new Container();
        this.addChild(this.mainContainer);
        this.newRoomButton = new Button({
        text: "start the game",
        width: 320,
        height: 320,
        });

        this.addChild(this.newRoomButton);

        this.text = new Text({
            text: 'connected users (max 2) :',
            style: {
            fill: '#ffffff',
            fontSize: 36,
            },
            anchor: 0.5
        });

        this.textIdRoom = new Text({
            text: `room ID : ${idRoom}`,
            style: {
            fill: '#ffffff',
            fontSize: 36,
            },
            anchor: 0.5
        });
        this.addChild(this.text);
        this.addChild(this.textIdRoom);

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
    this.text.x = width / 2 ;
    this.text.y = height / 2 - 250;
    this.textIdRoom.x = width / 2 ;
    this.textIdRoom.y = height / 2 - 200;
  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}