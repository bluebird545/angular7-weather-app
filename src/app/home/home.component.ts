import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Weather } from '../weather/weather';

import {Globals} from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [WeatherService]
})
export class HomeComponent implements OnInit {

    // weatherItems: Weather[];

  constructor(private globals: Globals, private _weatherService: WeatherService) { }

  ngOnInit() {
  }

}
