import GameState from './GameState';

class GameRegistry {
    private games: Map<string, GameState> = new Map();

    public registerGame(gameId: string, gameState: GameState): void {
        this.games.set(gameId, gameState);
    }

    public getGame(gameId: string): GameState | undefined {
        return this.games.get(gameId);
    }
}

export default GameRegistry;
