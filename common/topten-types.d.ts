export type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export interface Hint {playerId: string, text: string}

export interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export interface GameState {
  round?: number;
  unicorns?: number;
  players?: {[id: string]: string};
  step?: Step;
  ownId?: string;
  captainId?: string;
  card1?: string;
  card2?: string;
  chosenCard?: 1 | 2;
  secretNumber?: number;
  hints?: {[id: string]: Hint};
  orderedHints?: OrderedHint[];
}