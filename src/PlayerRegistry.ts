import { v4 as uuidv4 } from 'uuid';
import PlayerInfo from "./PlayerInfo";
import Player from "./player";
class PlayerRegistry {
    public myMap: Map<string, Player> = new Map();
    // static on: any; this will break SOLID

    public register(playerInfo: PlayerInfo): string {
        const id = uuidv4();
        const player = new Player(id, playerInfo);
        this.myMap.set(id, player);
        return id;
    }
    public fetch(id: string): Player | undefined {
        return this.myMap.get(id);
    }
}
export default PlayerRegistry;
