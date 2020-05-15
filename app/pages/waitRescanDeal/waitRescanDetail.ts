import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-meridian',
  templateUrl: './timepicker-meridian.html'
})
export class condensedTable {
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}