import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){}

  mySliderAction(event:any) {

    let slider = (<HTMLInputElement>document.getElementById('sldr'));
    let output = (<HTMLInputElement>document.getElementById('otp'));

    slider.oninput = ()=> {
       output.innerHTML = event.target.value;
    }
  }
}
