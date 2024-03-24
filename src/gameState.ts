import { Board } from "./Board";

export type Player = 'X' | 'O'
export class RunningState {
    public turn: Player
    public board: Board
    constructor(turn: Player, board: Board) {
        this.turn = turn;
        this.board = board;
    }
}
export class WinningState {
    public winner: Player
    public board: Board
    constructor(winner: Player, board: Board) {
        this.winner = winner;
        this.board = board;
    }
}

export class DrawState {
    public board: Board
    constructor(board: Board) {
        this.board = board;
    }
}
export type GameState = RunningState | WinningState | DrawState