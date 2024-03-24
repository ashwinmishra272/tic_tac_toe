export type BoardValue = "X" | "O" | ""
export class Board {
    private board: BoardValue[][]
    constructor() {
        this.board = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''));

    }
    public getValueAt(row: number, col: number): BoardValue {
        return this.board[row][col]
    }
    public setValueAt(row: number, col: number, value: BoardValue): void {
        this.board[row][col] = value
    }
}
