class GameRegistry {
    private static gameIdCounter: number = 0;
    private registry: Map<number, GameState>;

    constructor() {
        this.registry = new Map<number, GameState>();
    }

    createGame(): number {
        const gameId = GameRegistry.gameIdCounter++;
        const gameState = new GameState();
        this.registry.set(gameId, gameState);
        return gameId;
    }

    getGameState(gameId: number): GameState | undefined {
        return this.registry.get(gameId);
    }

    removeGame(gameId: number): boolean {
        return this.registry.delete(gameId);
    }
}
