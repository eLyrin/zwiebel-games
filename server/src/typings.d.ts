export type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export interface Hint {playerId: string, text: string}

export interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export interface GameState {
  round: number;
  unicorns: number;
  step: Step;
  players?: {[id: string]: string};
  captainId?: string;
  hints?: {[id: string]: Hint};
  orderedHints?: OrderedHint[];
  currentTask?: string;
}

export interface UserState {
  id: string;
  joined: boolean;
  task1: string;
  task2: string;
  secretNumber: number;
}
