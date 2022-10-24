import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { TopTenService } from '../topten.service';

@Component({
  selector: 'zg-topten-giveanswer',
  templateUrl: './topten-giveanswer.component.html',
  styleUrls: ['./topten-giveanswer.component.scss']
})
export class ToptenGiveanswerComponent implements OnInit {

  answer = new FormControl(null, this.answerIsValid);

  constructor(public game: TopTenService) { }

  ngOnInit(): void {
  }

  answerIsValid(ctrl: AbstractControl): ValidationErrors | null {
    return (!ctrl.value || (ctrl.value as string).trim().length < 3) ? {"invalid": true} : null;
  }
}
