import express, { Request, Response } from 'express';
import PlayerInfo from "./PlayerInfo"
import PlayerRegistry from './PlayerRegistry';
import GameRegistry from './GameRegistry';
import Game from './Game';
import Player from './player';
import GameInitializer from './GameIntializer';
const app = express();
const port: number = 3000;
const playerRegistry = new PlayerRegistry
const gameRegistry = new GameRegistry
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log("resl")
    res.send('Hello World!');
});
app.post('/api/player', (req: Request, res: Response) => {
    const playerInfo = new PlayerInfo(req.body.email, req.body.name, req.body.phoneNumber)
    const id = playerRegistry.register(playerInfo);
    console.log(playerRegistry.myMap);
    res.send(id);
});
app.get('/api/player/:id', (req: Request, res: Response) => {
    const playerId = req.params.id;
    res.send(playerRegistry.fetch(playerId));
});
app.get('/api/game/:gameId', (req: Request, res: Response) => {
    const gameId: string = req.params.gameId;
    const gameState = gameRegistry.getGame(gameId);
    console.log(`Searching for game with ID: ${gameId}`);

    if (!gameState) {
        // Handle case where game is not found
        return res.status(404).json({ message: 'Game not found' });
    }

    // Return the game state if found
    res.json({ gameState });
    console.log(`Found game with ID: ${gameId}`);
    console.log(gameId)
    console.log(gameState)
});
app.post('/api/game/start', (req: Request, res: Response) => {
    const player1Id = playerRegistry.register({ email: 'player1@example.com', name: 'Player 1', phoneNumber: '123456789' });
    const player2Id = playerRegistry.register({ email: 'player2@example.com', name: 'Player 2', phoneNumber: '987654321' });

    const gameId = GameInitializer.createGame();

    // const gameState = new Game(playerRegistry);

    gameRegistry.getGame(gameId);

    res.json({ gameId });
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
