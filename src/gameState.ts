class gameState {
    private static NONE: Number = 0;
    private static Player_X: Number = 1;
    private static Player_O: Number = 2;
    private board: Number[][];
    private currentPlayer: Number | undefined;
    private rowsum: number[] | undefined;
    private colsum: number[] | undefined;
    private diagSum1: number;
    private diagSum2: number;

    constructor() {
        this.board = [
            [gameState.NONE, gameState.NONE, gameState.NONE],
            [gameState.NONE, gameState.NONE, gameState.NONE],
            [gameState.NONE, gameState.NONE, gameState.NONE],
        ];
        this.currentPlayer = gameState.Player_X;
        this.rowsum = [0, 0, 0];
        this.colsum = [0, 0, 0];
        this.diagSum1 = 0;
        this.diagSum2 = 0;
    }
}