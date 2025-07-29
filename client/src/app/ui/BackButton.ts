import { Button } from "./Button";

import { engine } from "../getEngine";
import { RoomChoiceScreen } from "../screens/main/room-handling/RoomChoiceScreen";


export class BackButton extends Button {
  constructor() {

    super();
    this.text = "Back";

    this.onPress.connect(() => {
      engine().navigation.showScreen(RoomChoiceScreen);
    })

  }

}
