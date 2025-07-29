import { Container, Sprite } from "pixi.js";
import { engine } from "../../../getEngine";
import { mapLarge } from "../../../../maps/data/MapData";

/** The screen that holds the app */
export class RoomStartedScreen extends Container {
  /** Assets bundles required by this screen */
    public static assetBundles = ["main"];
    private tileData: Sprite[] = [

        Sprite.from("tile.png"),
        Sprite.from("tile.png"),
        Sprite.from("tile.png"),
    
    ];

    constructor() {
        super();
        const widthS = this.width;
        const heightS = this.height;

        const tileW = widthS / mapLarge[0].length;
        const tileH = heightS / mapLarge.length;

        for (let rowIndex = 0; rowIndex < mapLarge.length; rowIndex++) {
            const row = mapLarge[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const tile = row[colIndex];
                const sprite = this.tileData[tile];
                sprite.width = tileW;
                sprite.height = tileH;
                sprite.x = tileW * colIndex; 
                sprite.y = tileH * rowIndex;
                sprite.anchor.set(0, 0);
                this.addChild(sprite);
                console.log(`index: ${colIndex}, row: ${rowIndex}`);
                console.log(`Tile ${tile} at position (${sprite.x}, ${sprite.y})`);
            }
        }
    }


  /** Prepare the screen just before showing */
  public prepare() {}

  /** Fully reset */
  public reset() {}

  /** Resize the screen, fired whenever window size changes */
  public resize(width: number, height: number) {

  }

  /** Show screen with animations */
  public async show(): Promise<void> {
    engine().audio.bgm.play("main/sounds/bgm-main.mp3", { volume: 0.5 });

}
}