import { Server, Socket } from 'socket.io';
import { GameState as gs, UserState, Hint, OrderedHint } from '../../common/typings'

type GameState = Partial<gs>;

export class TopTenServer {

  private state: GameState = this.resetState();
  private players = new Map<string, {name: string, socket: Socket}>();
  private room = "default";
  
  constructor(private server: Server) { }

  public connect(socket: Socket) {
    socket.on("join", (name: string) => this.join(name, socket));
    this.patchGame(this.state, socket);
    socket.join(this.room);
  }

  public join(name: string, socket: Socket) {

    // socket.on("foo", () => this.patchGame(this.state, socket));
    console.log(`Spieler ${name} / ${socket.id} has joined the TopTenServer`);

    if (this.players.size > 8) {
      return;
    }
    
    this.players.set(socket.id, {name, socket});

    if (!this.state.players) {
      this.state.players = {};
    }

    this.state.players[socket.id] = name;
    this.patchGame({players: this.state.players});
    this.patchUser({id: socket.id, joined: true}, socket);
  }

  private resetState(): GameState {
    return {
      round: 1,
      unicorns: 8,
      step: "lobby"
    }
  }

  private patchGame(state: GameState, socket?: Socket) {
    console.log("patchgame: ", state);
    if (socket) {
      socket.emit("patchgame", state);
    } else {
      this.server.to(this.room).emit("patchgame", state);
    }
  }

  private patchUser(state: Partial<UserState>, socket: Socket) {
    socket.emit("patchuser", state);
  }
}