import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
// import { WEATHERS } from '../mock-weather';

import { Globals } from '../../globals'

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  providers: [WeatherService]
})
export class WeatherDetailsComponent implements OnInit {
    city: string;
    forecast: any;

  constructor(private globals: Globals, private _weatherService:WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.city = this.route.snapshot.paramMap.get('city');
     // console.log(city);
      this._weatherService.getSevenDayForecast(this.city)
          .pipe(map(result => (<any>result.dailyForecasts.forecastLocation.forecast)))
          .subscribe(result => {
              console.log(result);
              this.forecast = result;
              console.log(this.forecast);
          });
  }

}
