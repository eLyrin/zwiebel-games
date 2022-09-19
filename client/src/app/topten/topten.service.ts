import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { GameState, Hint, Step } from "@common/topten-types";

export interface GameStateVm extends GameState {
  isCaptain: boolean;
}

@Injectable()
export class TopTenService {

  public game: GameStateVm = {
    round: 1,
    unicorns: 8,
    step: "lobby",
    captainId: "b",
    isCaptain: true,
    secretNumber: 7,
    players: new Map<string, string>([
      ["a", "Manfred"],
      ["b", "Bettina"],
      ["c", "Hugo"],
      ["d", "Ulla"]
    ]),
    hints: new Map<string, Hint>([
      ["a", {playerId: "a", text: "Ich rette die Welt"}],
      ["b", {playerId: "b", text: "Ldmaskd dkasmdakm"}],
      ["c", {playerId: "c", text: "Mit einer Gummiente"}]
    ]),
    orderedHints: [
      {hintId: "b", secretNumber: 3, isCorrect: true},
      {hintId: "c", secretNumber: 5, isCorrect: false}
    ],
    card1: "Karte 1 kdamskdma dkamskdmaskmdaskmda Aufgabe daskmdkam dkasmdkasmd dkamsdksamdkm dkasmdksamdka dkasmdkamda dkasmdkasmd",
    card2: "zwei kdmaks einde ende",
    chosenCard: 1
  };


  constructor(private user: UserService) {

    // user.socket.on("connect", () => {
    //   console.log("angular connected");
    // });

    // user.socket.on("topten", (arg: GameState) => {
    //   console.log("topten: ", arg);
    //   this.game = {...this.game, ...arg};
    // });
  }

  public foo() {
    console.log("foooooo");
    // this.game.step = this.game.step === "lobby" ? "orderhints" : "lobby";
    const steps: Step[] = ["lobby", "choosecaptain", "choosetext", "givehints", "orderhints"];
    const currentIdx = steps.findIndex(x => x === this.game.step);
    this.game.step = currentIdx === steps.length - 1 ? steps[0] : steps[currentIdx + 1];

    // this.game.players!.set("d", "Neuer Spieler Ilse");
    // this.game.isCaptain = !this.game.isCaptain;
  }

  public chooseHint(id: string) {
    // this.user.socket.emit("chooseText", id);
  }

  public startGame() {
    console.log("starting game..");
  }

  public becomeCaptain() {
    console.log("I want to be the captain");
  }

  public giveAnswer(answer: any) {
    console.dir(answer);
    // console.log("answer: ", answer);
  }
}