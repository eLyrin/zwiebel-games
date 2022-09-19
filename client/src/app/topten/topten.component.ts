import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GameState } from '@common/topten-types';
import { TopTenService } from './topten.service';

@Component({
  selector: 'zg-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss'],
  providers: [TopTenService],
  animations: [
    trigger("inOut", [
      transition(":enter", [
        style({
          opacity: 0,
          // transform: "translateX(30%)"
        }),
        animate("0.3s 0.3s ease-in")
      ]),
      transition(":leave", [
        style({opacity: 1, position: "absolute"}),
        animate("0.3s 0s ease-out", style({opacity: 0, position: "absolute"}))
      ])
    ])
  ]
})
export class ToptenComponent implements OnInit {

  show = true;

  constructor(public service: TopTenService) { }

  ngOnInit(): void {
  }

  public get game(): GameState {
    return this.service.game;
  }

  toggle() {
    this.show = !this.show;
  }


}
