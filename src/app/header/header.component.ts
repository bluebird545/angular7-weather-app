import { Component, OnInit } from '@angular/core';

import {Globals} from '../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globals: Globals) { }

  showMenu: boolean = false;
  toggleMenu() {
      if (this.showMenu == true) {
          this.showMenu = false;
      } else {
          this.showMenu = true;
      }
  }

  ClickedOut(event) {
      // console.log(event.target.className)
    //debugger;
    if(event.target.className === "slide-menu__container active") {
        this.showMenu = false;
    }
  }

  modeToggleSwitch(event) {
      if ( event.target.checked ) {
          this.globals.darkModeActive = true;
      } else {
          this.globals.darkModeActive = false;
      }
  }

  ngOnInit() {
  }

}
