import PlayerInfo from "./PlayerInfo";

class Player {
    getid() {
        return this.playerId
    }
    constructor(
        public playerId: string,
        public playerInfo: PlayerInfo,
    ) { }
}

export default Player;