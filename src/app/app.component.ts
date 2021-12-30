import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olafs slider';

  constructor(){}

  slide_lbl(val: number | null) {
    if (!val) {
      return 0;
    }

    if (val >= 1000) {
      return Math.round(val / 1000);
    }
    return val;
  }
}
