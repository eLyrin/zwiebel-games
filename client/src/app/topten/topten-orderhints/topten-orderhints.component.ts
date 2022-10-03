import { Component, OnInit } from '@angular/core';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-orderhints',
  templateUrl: './topten-orderhints.component.html',
  styleUrls: ['./topten-orderhints.component.scss']
})
export class ToptenOrderhintsComponent implements OnInit {

  constructor(public service: TopTenService) { }

  ngOnInit(): void {
  }

  public get game() { 
    return this.service.game;
  }
}
