import PlayerInfo from "./PlayerInfo";
import { v4 as uuidv4 } from 'uuid';
import Player from "./player";
class PlayerRegistry {
    public static myMap: Map<string, Player> = new Map();
    private static playerIdCounter: number = 1;
    public static register(playerInfo: PlayerInfo): string {
        const id = uuidv4();
        const player = new Player(id, playerInfo);
        this.myMap.set(id, player);
        return id;
    }
    public static fetch(id: string): Player | undefined {
        return this.myMap.get(id);
    }
}
export default PlayerRegistry;
