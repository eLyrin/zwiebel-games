import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
        animate("0.5s ease-in")
      ]),
      // elemente ruckeln beim uebergang zu "orderhints"
      // transition(":leave", [
      //   style({opacity: 1, position: "absolute"}),
      //   animate("0.3s ease-out", style({opacity: 0}))
      // ])
    ])
  ]
})
export class ToptenComponent implements OnInit {

  constructor(public game: TopTenService) { }

  ngOnInit(): void {
  }

  get cantJoinMessage(): string | null {

    return null;
    // if (this.game.joined) {
    //   return null;
    // }

    // if (this.game.step !== 'lobby') {
    //   return "Das Spiel läuft bereits"
    // }

    // if (this.game.players && Object.keys(this.game.players).length > 8) {
    //   return "Das Spiel ist bereits voll";
    // }
    
    // return null;
  }
}
