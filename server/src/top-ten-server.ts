import { Socket } from 'socket.io';

export class TopTenServer {
  private players = new Map<string, Socket>();

  public join(player: Socket) {
    // TODO Spiel voll
    this.players.set(player.id, player);
  }
}