export interface Timer {
  interval: any;
  minutes: number;
  seconds: number;
}

export interface CurrentWord {
  index: number;
  offsetTop: number;
}

export interface Game {
  start: boolean;
  init: boolean;
  finish: boolean;
}

export interface ContainerPosition {
  offsetTop: number;
  currentPositionTop: number;
}

export interface KeyStroke {
  total: number;
  incorrect: number;
}