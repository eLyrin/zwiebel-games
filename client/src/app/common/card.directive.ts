import { Directive } from '@angular/core';

@Directive({
  selector: 'div.card',
  host: {class: 'bg-neutral-50 p-4 shadow-md rounded-sm'}
})
export class CardDirective {

  constructor() { }

}
