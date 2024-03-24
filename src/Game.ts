import { GameState } from './GameState';
import PlayerRegistry from './PlayerRegistry';
class Game {
    public gameState: GameState
    public p1_Id: string
    public p2_Id: string
    constructor(gameState: GameState, p1_Id: string, p2_Id: string) {
        this.gameState = gameState
        this.p1_Id = p1_Id
        this.p2_Id = p2_Id
    }

}
export default Game