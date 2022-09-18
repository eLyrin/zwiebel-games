import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { GameState, Hint } from "@common/topten-types";

export interface GameStateVm extends GameState {
  isCaptain?: boolean;
}

@Injectable()
export class TopTenService {

  public game: GameStateVm = {
    round: 1,
    unicorns: 8,
    step: "orderhints",
    isCaptain: false,
    players: new Map<string, string>([
      ["a", "Manfred"],
      ["b", "Bettina"],
      ["c", "Hugo"]
    ]),
    hints: new Map<string, Hint>([
      ["a", {playerId: "a", text: "Ich rette die Welt"}],
      ["b", {playerId: "b", text: "Ldmaskd dkasmdakm"}],
      ["c", {playerId: "c", text: "Mit einer Gummiente"}]
    ]),
    orderedHints: [
      {hintId: "b", secretNumber: 3, isCorrect: true},
      {hintId: "c", secretNumber: 5, isCorrect: false}
    ]
  };


  constructor(private user: UserService) {

    user.socket.on("connect", () => {
      console.log("angular connected");
    });

    user.socket.on("topten", (arg: GameState) => {
      console.log("topten: ", arg);
      this.game = {...this.game, ...arg};
    });
  }

  public foo() {
    const bla = Array.from(this.game.hints!.values());
    for (const key in this.game.hints) {

    }
    console.log("foooooo");
    this.game.isCaptain = !this.game.isCaptain;
    // this.user.socket.emit("foo", "hariboooo");
    // this.user.login();
    // this.step$.next("choosetext");
  }
}