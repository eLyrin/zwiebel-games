import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _authorized$ = new BehaviorSubject(false);
  public authorized$ = this._authorized$.asObservable();

  constructor(private http: HttpClient) {
  }

  public login() {
    this._authorized$.next(true);
    firstValueFrom(this.http.get("api/flubber", {responseType: 'text'}))
      .then((res) => console.log("response: ", res));
  }
}
