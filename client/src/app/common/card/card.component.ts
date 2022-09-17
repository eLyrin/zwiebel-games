import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zg-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() glass = false;

  constructor() { }

  ngOnInit(): void {
  }

}
