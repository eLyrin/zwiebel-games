export declare type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export declare interface Hint {playerId: string, text: string}

export declare interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export declare interface GameState {
  round: number | undefined;
  unicorns: number | undefined;
  players: {[id: string]: string} | undefined;
  step: Step | undefined;
  captainId: string | undefined;
  hints: {[id: string]: Hint} | undefined;
  orderedHints: OrderedHint[] | undefined;
  currentTask: string | undefined;
}

export declare interface UserState {
  id: string | undefined;
  joined: boolean | undefined;
  task1: string | undefined;
  task2: string | undefined;
  secretNumber: number | undefined;
}
