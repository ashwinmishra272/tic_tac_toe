import Game from './Game';

class GameRegistry {
    private games: Map<string, Game> = new Map();

    public registerGame(gameId: string, gameState: Game): void {
        this.games.set(gameId, gameState);
    }

    public getGame(gameId: string): Game | undefined {
        return this.games.get(gameId);
    }
}

export default GameRegistry;
