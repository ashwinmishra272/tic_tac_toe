import GameState from './GameState';

class GameRegistry {
    private static games: Map<string, GameState> = new Map();

    public static registerGame(gameId: string, gameState: GameState): void {
        this.games.set(gameId, gameState);
    }

    public static getGame(gameId: string): GameState | undefined {
        return this.games.get(gameId);
    }
}

export default GameRegistry;
