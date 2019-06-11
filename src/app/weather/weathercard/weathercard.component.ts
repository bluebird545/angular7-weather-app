import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Globals } from '../../globals';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
// import { WeatherItemComponent } from '../item/weather-item';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnInit {
    weatherItems: Weather[];

  constructor(private globals: Globals, private _weatherService:WeatherService) {
  }

  ngOnInit(): any {
      this.weatherItems = this._weatherService.getWeatherData();
      // console.log(this.weather);
  }




}
