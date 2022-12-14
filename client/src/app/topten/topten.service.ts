import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { UserState, GameState, Step, Hint, OrderedHint } from "./typings";

@Injectable()
export class TopTenService implements UserState, GameState {

  // foooo: Foooo = {"bar": "kdmaskda"};

  id: string | undefined;
  joined = false;
  task1: string | undefined;
  task2: string | undefined;
  secretNumber: number | undefined;

  round: number | undefined;
  unicorns: number | undefined;
  players: { [id: string]: string; } | undefined;
  step: Step | undefined;
  captainId: string | undefined;
  hints: { [id: string]: Hint; } | undefined;
  orderedHints: OrderedHint[] | undefined;
  currentTask: string | undefined;

  // public game: GameState = {
  //   round: 1,
  //   unicorns: 8,
  //   step: "lobby",
  //   // captainId: "b",
  //   // isCaptain: true,
  //   // secretNumber: 7,
  //   // players: new Map<string, string>([
  //   //   ["a", "Manfred"],
  //   //   ["b", "Bettina"],
  //   //   ["c", "Hugo"],
  //   //   ["d", "Ulla"]
  //   // ]),
  //   // hints: {
  //   //   "a": {playerId: "a", text: "Ich rette die Welt"},
  //   //   "b": {playerId: "b", text: "Ldmaskd dkasmdakm"},
  //   //   "c": {playerId: "c", text: "Mit einer Gummiente"}
  //   // },
  //   // orderedHints: [
  //   //   {hintId: "b", secretNumber: 3, isCorrect: true},
  //   //   {hintId: "c", secretNumber: 5, isCorrect: false}
  //   // ],
  //   // card1: "Karte 1 kdamskdma dkamskdmaskmdaskmda Aufgabe daskmdkam dkasmdkasmd dkamsdksamdkm dkasmdksamdka dkasmdkamda dkasmdkasmd",
  //   // card2: "zwei kdmaks einde ende",
  //   // chosenCard: 1
  // };

  constructor(private user: UserService) {
    // user.socket.on("connect", () => {
    //   console.log("angular connected");
    // });
    user.socket.on("patchgame", (arg) => Object.assign(this, arg));
    user.socket.on("patchuser", (arg) => Object.assign(this, arg));
    // this.join("bllaaa");
  }

  get isCaptain(): boolean {
    return true;
    // return !!this.captainId && this.captainId === this.id;
  }

  public foo() {
    // this.user.socket.emit("foo");
    console.log("foooooo ", this.user.socket.connected);

    const steps: Step[] = ["lobby", "choosecaptain", "choosetext", "givehints", "orderhints"];
    const currentIdx = steps.findIndex(x => x === this.step);
    this.step = currentIdx === steps.length - 1 ? steps[0] : steps[currentIdx + 1];

    // this.game.players!.set("d", "Neuer Spieler Ilse");
    // this.game.isCaptain = !this.game.isCaptain;
  }

  public join(name: string) {
    this.user.socket.emit("join", name);
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