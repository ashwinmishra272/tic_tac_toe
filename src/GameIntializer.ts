import { v4 as uuidv4 } from 'uuid';

class GameInitializer {
    public static createGame(): string {
        const gameId = uuidv4();
        return gameId;
    }
}

export default GameInitializer;
