import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-lobby',
  templateUrl: './topten-lobby.component.html',
  styleUrls: ['./topten-lobby.component.scss']
})
export class ToptenLobbyComponent implements OnInit {

  name = new FormControl(null, [Validators.required]);

  constructor(public game: TopTenService) { }

  ngOnInit(): void {
  }

}
