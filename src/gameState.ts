import PlayerRegistry from './PlayerRegistry';


class GameState {
    private currentPlayer: string = 'X';
    private playerRegistry: PlayerRegistry;
    private board: string[][] = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    constructor(playerRegistry: PlayerRegistry) {
        this.playerRegistry = playerRegistry;
    }

    public makeMove(row: number, col: number, playerId: string): boolean {
        const player = this.playerRegistry.fetch(playerId);
        if (!player) return false; // Player not found

        if (this.board[row][col] === '_') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            return true; // Move successful
        }
        return false; // Move invalid
    }

    public checkForWin(): string | null {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] !== '_' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
                return this.board[i][0]; // Row win
            }
        }

        for (let j = 0; j < 3; j++) {
            if (this.board[0][j] !== '_' && this.board[0][j] === this.board[1][j] && this.board[1][j] === this.board[2][j]) {
                return this.board[0][j]; // Column win
            }
        }

        if (this.board[0][0] !== '_' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            return this.board[0][0]; // Diagonal win (top-left to bottom-right)
        }

        if (this.board[0][2] !== '_' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
            return this.board[0][2]; // Diagonal win (top-right to bottom-left)
        }

        // Check for draw
        if (this.isBoardFull()) {
            return 'draw'; // Draw
        }

        return null; // Game still in progress
    }

    private isBoardFull(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === '_') {
                    return false; // Found an empty cell
                }
            }
        }
        return true; // All cells are filled
    }

    public getBoard(): string[][] {
        return this.board;
    }
}

export default GameState;
