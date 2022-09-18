import { Component, OnInit } from '@angular/core';
import { GameState } from '@common/topten-types';
import { TopTenService } from './topten.service';

@Component({
  selector: 'zg-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss'],
  providers: [TopTenService]
})
export class ToptenComponent implements OnInit {

  constructor(public service: TopTenService) { }

  ngOnInit(): void {
  }

  public get game(): GameState {
    return this.service.game;
  }
}
