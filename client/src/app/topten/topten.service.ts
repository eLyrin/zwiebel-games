import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { UserState, GameState, Step, Hint, OrderedHint } from "./typings";

@Injectable()
export class TopTenService implements UserState, GameState {

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

  private socket = io("http://localhost:3001/", {transports: ["websocket"]});

  constructor() {
    this.socket.on("connect", () => {
      console.log("angular connected");
    });
    this.socket.on("patchgame", (arg) => Object.assign(this, arg));
    this.socket.on("patchuser", (arg) => Object.assign(this, arg));
    // this.join("bllaaa");
    // this.players = {
    //   a: "Manfred",
    //   b: "Bettina",
    //   c: "Hugo",
    //   d: "Ulla"
    // };
    // this.id = "c";
    // this.captainId = "c";
    // this.step = "lobby";
    // this.currentTask = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum laboriosam sequi itaque tenetur quibusdam recusandae aspernatur, nisi explicabo? Beatae repellendus aliquam quos quo unde placeat vero quas quaerat amet!";
    // this.secretNumber = 7;
  }

  get isCaptain(): boolean {
    return !!this.captainId && this.captainId === this.id;
  }

  public foo() {
    const steps: Step[] = ["lobby", "choosecaptain", "choosetext", "givehints", "orderhints"];
    const currentIdx = steps.findIndex(x => x === this.step);
    this.step = currentIdx === steps.length - 1 ? steps[0] : steps[currentIdx + 1];
  }

  public join(name: string) {
    this.socket.emit("join", name);
  }

  public chooseHint(id: string) {
    // this.user.socket.emit("chooseText", id);
  }

  public startGame() {
    this.socket.emit("start");
  }

  public becomeCaptain() {
    this.socket.emit("becomeCaptain");
  }

  public giveAnswer(answer: any) {
    console.dir(answer);
    // console.log("answer: ", answer);
  }
}