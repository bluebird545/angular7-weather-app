import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { WeatherItemComponent } from './weather/details/weather-item.component';
import {Globals} from './globals'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6crud';

//   showSvgs: boolean = false;
//   getClass() {
//     if(this.className === 'hide-svgs') {
//         this.showSvgs = false;
//     } else {
//         this.showSvgs = true;
//     }
// }



  // darkModeActive: boolean = false;
  modeToggleSwitch(event) {
      if ( event.target.checked ) {
          this.globals.darkModeActive = true;
      } else {
          this.globals.darkModeActive = false;
      }
  }



  constructor (private globals: Globals) {

  }
}
