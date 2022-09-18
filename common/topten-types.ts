export type Step = "lobby" | "choosecaptain" | "choosetext" | "givehints" | "orderhints";

export interface Player {id: string; name: string};

export interface Hint {playerId: string, text: string};

export interface OrderedHint {hintId: string, secretNumber: number, isCorrect: boolean}

export interface GameState {
  round?: number;
  unicorns?: number;
  players?: Map<string, string>;
  captainId?: string;
  step?: Step;
  card1?: string;
  card2?: string;
  hints?: Map<string, Hint>;
  orderedHints?: OrderedHint[];
}