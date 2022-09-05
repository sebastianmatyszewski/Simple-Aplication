import { Component, Input } from '@angular/core';

@Component({
  selector: 'print-error',
  templateUrl: './print-error.component.html',
  providers: [],
})
export class PrintError {
  @Input('control')
  control: any;
}
