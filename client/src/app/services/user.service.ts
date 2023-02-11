import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly socket!: Socket;

  constructor(private http: HttpClient) {
    // this.socket = io("http://localhost:3001/", {transports: ["websocket"]});
    // this.socket = io({transports: ["websocket"]});

    // this.socket.on("connect_error", (err) => {
    //   console.log(`connect_error due to ${err.message}`);
    // });
    // console.log("initSocket: ", this.socket);
  }
}
