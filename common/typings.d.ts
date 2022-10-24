export type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export interface Hint {playerId: string, text: string}

export interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export interface GameState {
  round: number | undefined;
  unicorns: number | undefined;
  players: {[id: string]: string} | undefined;
  step: Step | undefined;
  captainId: string | undefined;
  hints: {[id: string]: Hint} | undefined;
  orderedHints: OrderedHint[] | undefined;
  currentTask: string | undefined;
}

export interface UserState {
  id: string | undefined;
  joined: boolean;
  task1: string | undefined;
  task2: string | undefined;
  secretNumber: number | undefined;
}
