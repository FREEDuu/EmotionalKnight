import { mapLarge } from "../data/MapData";

export async function processFile() {
  for (const row of mapLarge) {
    for (const tile of row) {
      console.log(tile);
    }
  }
}