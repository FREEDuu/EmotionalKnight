import { Room, Client } from "@colyseus/core";
import { PlayerState, Player } from "./schema/PlayerState";

export class GameRoom extends Room<PlayerState> {
  maxClients = 3;
  state = new PlayerState();

  onCreate (options: any) {
    this.onMessage("type", (client, message) => {
      console.log("Received message from", client.sessionId, ":", message);
      // Handle the message here
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    this.state.players.set(client.sessionId, new Player());
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
