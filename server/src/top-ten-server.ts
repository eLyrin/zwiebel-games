import { Server, Socket } from 'socket.io';
import { GameState } from '../../common/topten-types'

export class TopTenServer {

  private state: GameState = this.resetState();
  private players = new Map<string, {name: string, socket: Socket}>();
  private room = "default";
  
  constructor(private server: Server) { }

  public join(name: string, socket: Socket) {

    socket.on("foo", () => this.patchState(this.state, socket));
    // TODO Spiel voll
    console.log(`Spieler ${name} / ${socket.id} has joined the TopTenServer`);

    this.players.set(socket.id, {name, socket});

    if (!this.state.players) {
      this.state.players = {}
    }

    this.state.players[socket.id] = name;
    this.patchState(this.state, socket);
    this.patchState({players: this.state.players});
    socket.join(this.room);
  }

  private resetState(): GameState {
    return {
      round: 1,
      unicorns: 8,
      step: "lobby"
    }
  }

  private patchState(state: GameState, socket?: Socket) {
    console.log("patchstate: ", state);
    if (socket) {
      socket.emit("patchstate", state);
    } else {
      this.server.to(this.room).emit("patchstate", state);
    }
  }
}