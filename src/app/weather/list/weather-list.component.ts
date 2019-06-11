import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  // providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  // @Input('WeatherForecastList') weathers: any;
  weatherItems: Weather[];


  constructor(private globals: Globals, private _weatherService:WeatherService) { }

  ngOnInit(): any {
      this.weatherItems = this._weatherService.getWeatherData();
      // console.log(this.weather);
  }

}
