import { Directive } from '@angular/core';

@Directive({
  selector: 'button',
  host: {class: "p-3 text-white text-lg font-semibold rounded-md shadow bg-gradient-to-r from-cyan-400 to-blue-500 disabled:opacity-25"}
})
export class ButtonDirective {
  constructor() { }
}
