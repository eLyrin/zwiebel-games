import { Server, Socket } from 'socket.io';
import { GameState, UserState, Hint, OrderedHint } from 'typings';

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

  private join(name: string, socket: Socket) {

    if (this.players.size > 8) {
      return;
    }

    socket.on("start", () => this.start());
    socket.on("becomeCaptain", () => this.becomeCaptain(socket.id));
    
    this.players.set(socket.id, {name, socket});

    if (!this.state.players) {
      this.state.players = {};
    }

    this.state.players[socket.id] = name;
    this.patchGame({players: this.state.players});
    this.patchUser({id: socket.id, joined: true}, socket);
  }

  private start() {
    this.patchGame({step: "choosecaptain"});
  }

  private becomeCaptain(captainId: string) {
    this.patchGame({captainId, step: "choosetext"});
  }

  private resetState(): GameState {
    return {
      round: 1,
      unicorns: 8,
      step: "lobby"
    }
  }

  private patchGame(state: Partial<GameState>, socket?: Socket) {
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