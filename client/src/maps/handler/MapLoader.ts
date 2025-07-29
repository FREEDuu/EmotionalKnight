import { Container, Sprite } from "pixi.js";
import { mapLarge } from "../data/MapData";

export class MapLoader {



    public loadMap(container : Container, tileData: Sprite[]) {
        const widthS = container.width;
        const heightS = container.height;

        console.log(`Window size: ${widthS}x${heightS}`);

        const tileW = widthS / mapLarge[0].length;
        const tileH = heightS / mapLarge.length;

        console.log(`Tile size: ${tileW}x${tileH}`);

        for (let rowIndex = 0; rowIndex < mapLarge.length; rowIndex++) {
            const row = mapLarge[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const tile = row[colIndex];
                const sprite = tileData[tile];
                sprite.width = tileW;
                sprite.height = tileH;
                sprite.x = tileW * colIndex; 
                sprite.y = tileH * rowIndex;
                sprite.anchor.set(0.5); // Center the sprite 
                container.addChild(sprite);
                console.log(`index: ${colIndex}, row: ${rowIndex}`);
                console.log(`Tile ${tile} at position (${sprite.x}, ${sprite.y})`);
            }
        }
    }
}
