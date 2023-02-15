import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TopTenService } from './topten.service';

// export const slideInRight = animation([
//   animate('2.5s ease-in', keyframes([
//     style({ transform: 'translateX(100%)', offset: 0 }),
//     style({ transform: 'translateX(0%)', offset: 1 })
//   ]))
// ]);

// export const slideOutLeft = animation([
//   animate('2.5s ease-out', keyframes([
//     style({ transform: 'translateX(0%)', offset: 0 }),
//     style({ transform: 'translateX(-100%)', offset: 1 })
//   ]))
// ]);

@Component({
  selector: 'zg-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss'],
  providers: [TopTenService],
  animations: [
    trigger('inOut', [
      transition(':leave', [
        animate('900ms ease-in', style({ transform: 'translateX(-50vw)'}))
      ]),
      transition(':enter', [
        style({  transform: 'translateX(50vw)' }),
        animate('900ms ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])

  ]
})
export class ToptenComponent implements OnInit {

  constructor(public game: TopTenService) { }

  ngOnInit(): void {
    
  }

  toggle = true;



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
