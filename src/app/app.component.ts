import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){}

  ngOnInit(){
    let btn = <HTMLInputElement>document.getElementById("btn");
    btn.className="toggled";
  }
  clickMe(){

    let btn = <HTMLInputElement>document.getElementById("btn");

    if(btn.className!=="toggled"){
      btn.className = "toggled";
    }
    else{
      btn.className ='untoggled';
    }
  }
}
