import express, { Request, Response } from 'express';
import PlayerInfo from "./PlayerInfo"
import PlayerRegistry from './player_registry';
const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log("resl")
    res.send('Hello World!');
});
app.post('/api/player', (req: Request, res: Response) => {
    const playerInfo = new PlayerInfo(req.body.email, req.body.name, req.body.phoneNumber)
    const id = PlayerRegistry.register(playerInfo);
    console.log(PlayerRegistry.myMap);
    res.send(id);
});
app.get('/api/player', (req: Request, res: Response) => {
    res.json(Array.from(PlayerRegistry.myMap));
});

app.get('/api/player/:id', (req: Request, res: Response) => {
    const playerId = req.params.id;
    res.send(PlayerRegistry.fetch(playerId));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
