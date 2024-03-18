class PlayerId {
    private static playerIdCounter: number = 1;
    private playerId: number;

    constructor(private playerInfo: PlayerInfo) {
        this.playerId = PlayerId.playerIdCounter++;
    }

    getPlayerId(): number {
        return this.playerId;
    }

    getPlayerInfo(): PlayerInfo {
        return this.playerInfo;
    }
}

// Example usage:
const playerInfo = new PlayerInfo("example@email.com", "John Doe", "123-456-7890");
const playerId = new PlayerId(playerInfo);

console.log("Player ID:", playerId.getPlayerId());
console.log("Player Info:", playerId.getPlayerInfo());
