class GameState {
    private static currentPlayer: string = 'X';
    private player2Id: string;
    private winner: string | null = null;
    private isDraw: string | null = null;
    static winner: any;
    static isDraw: any;

    constructor(player1Id: string, player2Id: string) {
        this.player2Id = player2Id;
    }
    private static board: string[][] = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
    public static makeMove(row: number, col: number): boolean {
        if (this.board[row][col] === '_') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            return true; // Move successful
        }
        return false; // Move invalid
    }

    public isGameOver(): boolean {
        // Check for winning conditions
        if (this.checkForWin('X')) {
            console.log('Player X wins!');
            return true;
        } else if (this.checkForWin('O')) {
            console.log('Player O wins!');
            return true;
        }

        // Check for draw
        if (this.isBoardFull()) {
            console.log('It\'s a draw!');
            return true;
        }

        return false; // Game is not over
    }

    private checkForWin(player: string): boolean {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (GameState.board[i][0] === player && GameState.board[i][1] === player && GameState.board[i][2] === player) {
                return true;
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (GameState.board[0][j] === player && GameState.board[1][j] === player && GameState.board[2][j] === player) {
                return true;
            }
        }

        // Check diagonals
        if ((GameState.board[0][0] === player && GameState.board[1][1] === player && GameState.board[2][2] === player) ||
            (GameState.board[0][2] === player && GameState.board[1][1] === player && GameState.board[2][0] === player)) {
            return true;
        }

        return false;
    }

    private isBoardFull(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (GameState.board[i][j] === '_') {
                    return false; // Found an empty cell
                }
            }
        }
        return true; // All cells are filled
    }

    public getBoard(): string[][] {
        return GameState.board;
    }
    public static getGameStatus(): string {
        if (this.winner) {
            return `Player ${this.winner} wins!`;
        } else if (this.isDraw) {
            return 'The game is a draw.';
        } else {
            return 'The game is in progress.';
        }
    }
}
export default GameState;

