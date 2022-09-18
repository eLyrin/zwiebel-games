import { Component, OnInit } from '@angular/core';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-choosetext',
  templateUrl: './topten-choosetext.component.html',
  styleUrls: ['./topten-choosetext.component.scss']
})
export class ToptenChoosetextComponent implements OnInit {

  constructor(public service: TopTenService) { }

  ngOnInit(): void {
  }

}
