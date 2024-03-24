export class MakeMove {
    public playerId: string
    public gameId: string
    public row: number
    public col: number
    constructor(playerId: string, gameId: string, row: number, col: number) {
        this.playerId = playerId
        this.gameId = gameId
        this.row = row
        this.col = col
    }
}
export class PlayGameRequest {
    public playerId: string
    constructor(playerId: string) {
        this.playerId = playerId
    }
}
export class Resign {
    public playerId: string
    public gameId: string
    constructor(playerId: string, gameId: string) {
        this.playerId = playerId
        this.gameId = gameId
    }
}
export class RegisterPlayer {
    public email: string,
    public name: string,
    public phoneNumber: string
    constructor(email: string, name: string, phoneNumber: string) {
        this.email = email
        this.name = name
        this.phoneNumber = phoneNumber
    }
}

export type GameEvent = MakeMove | PlayGameRequest | Resign | RegisterPlayer