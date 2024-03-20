import PlayerInfo from "./PlayerInfo";

class Player {
    constructor(
        public playerId: string,
        public playerInfo: PlayerInfo,
    ) { }
}

export default Player;