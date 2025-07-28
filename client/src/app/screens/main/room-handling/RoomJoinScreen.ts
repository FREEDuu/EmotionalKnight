import { Container, Text } from "pixi.js";
import { engine } from "../../../getEngine";
import { InputText } from "../../../ui/InputText";

/** The screen that holds the app */
export class RoomJoinScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];

    public mainContainer: Container;
    private inputIdRoom: InputText
    private text: Text;

    constructor() {
        super();

        this.mainContainer = new Container();
        this.addChild(this.mainContainer);
        this.inputIdRoom = new InputText();
        this.addChild(this.inputIdRoom);

        this.text = new Text({
            text: 'Insert Room ID:',
            style: {
            fill: '#ffffff',
            fontSize: 36,
            },
            anchor: 0.5
        });

        this.addChild(this.text);

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
    this.inputIdRoom.x =  width / 2 - (this.inputIdRoom.width / 2);
    this.inputIdRoom.y = height / 2 + 200 - (this.inputIdRoom.height / 2);    
    this.text.x = width / 2 ;
    this.text.y = height / 2 - 250;

  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}