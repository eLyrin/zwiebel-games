export type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export interface Player {id: string; name: string};

export interface Hint {playerId: string, text: string};

export interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export interface GameState {
  round?: number;
  unicorns?: number;
  players?: Map<string, string>;
  step?: Step;
  captainId?: string;
  card1?: string;
  card2?: string;
  chosenCard?: 1 | 2;
  secretNumber?: number;
  hints?: Map<string, Hint>;
  orderedHints?: OrderedHint[];
}