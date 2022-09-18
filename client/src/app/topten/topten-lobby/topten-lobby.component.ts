import { Component, OnInit } from '@angular/core';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-lobby',
  templateUrl: './topten-lobby.component.html',
  styleUrls: ['./topten-lobby.component.scss']
})
export class ToptenLobbyComponent implements OnInit {

  constructor(public service: TopTenService) { }

  ngOnInit(): void {
  }

}
