class GameState {
    private static readonly NONE: number = 0;
    private static readonly PLAYER_X: number = 1;
    private static readonly PLAYER_O: number = 2;

    private board: number[][];
    private currentPlayer: number;

    constructor() {
        this.board = this.initializeBoard();
        this.currentPlayer = GameState.PLAYER_X;
    }

    private initializeBoard(): number[][] {
        return Array.from({ length: 3 }, () => Array(3).fill(GameState.NONE));
    }

    makeMove(row: number, col: number): boolean {
        if (!this.isValidMove(row, col)) {
            return false;
        }

        this.board[row][col] = this.currentPlayer;

        if (this.hasWinner()) {
            console.log(`Player ${this.currentPlayer === GameState.PLAYER_X ? 'X' : 'O'} wins!`);
            return true;
        }

        this.switchPlayer();

        return true;
    }

    private isValidMove(row: number, col: number): boolean {
        return (
            row >= 0 &&
            row < 3 &&
            col >= 0 &&
            col < 3 &&
            this.board[row][col] === GameState.NONE
        );
    }

    private hasWinner(): boolean {
        for (let i = 0; i < 3; i++) {
            if (this.checkLine(this.board[i][0], this.board[i][1], this.board[i][2])) {
                return true;
            }
            if (this.checkLine(this.board[0][i], this.board[1][i], this.board[2][i])) {
                return true;
            }
        }
        if (this.checkLine(this.board[0][0], this.board[1][1], this.board[2][2])) {
            return true;
        }
        if (this.checkLine(this.board[0][2], this.board[1][1], this.board[2][0])) {
            return true;
        }

        return false;
    }

    private checkLine(a: number, b: number, c: number): boolean {
        return a !== GameState.NONE && a === b && b === c;
    }

    private switchPlayer(): void {
        this.currentPlayer =
            this.currentPlayer === GameState.PLAYER_X
                ? GameState.PLAYER_O
                : GameState.PLAYER_X;
    }

    getCurrentPlayer(): number {
        return this.currentPlayer;
    }

    getBoard(): number[][] {
        return this.board;
    }
}

const game = new GameState();

game.makeMove(0, 0);
game.makeMove(1, 1);
game.makeMove(0, 1);
game.makeMove(2, 2);
game.makeMove(0, 2);

console.log("Current Player:", game.getCurrentPlayer());
console.log("Board:", game.getBoard());
