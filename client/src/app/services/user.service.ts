import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _authorized$ = new BehaviorSubject(false);
  public readonly authorized$ = this._authorized$.asObservable();
  public readonly socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io("http://localhost:3001/", {transports: ["websocket"]});
    console.log("initSocket: ", this.socket);
  }

  public login() {
    this._authorized$.next(true);
    firstValueFrom(this.http.get("api/flubber", {responseType: 'text'}))
      .then((res) => console.log("response: ", res));
  }
}
