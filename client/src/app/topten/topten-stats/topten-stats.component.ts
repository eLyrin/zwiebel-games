import { Component, OnInit } from '@angular/core';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-stats',
  templateUrl: './topten-stats.component.html',
  styleUrls: ['./topten-stats.component.scss']
})
export class ToptenStatsComponent implements OnInit {

  constructor(public game: TopTenService) { }

  ngOnInit(): void {
  }
}
