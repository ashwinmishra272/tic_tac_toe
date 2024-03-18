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
