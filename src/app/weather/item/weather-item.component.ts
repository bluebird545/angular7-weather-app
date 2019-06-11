import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
// import { WEATHERS } from '../mock-weather';

import { Globals } from '../../globals'

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
  providers: [WeatherService]
})
export class WeatherItemComponent implements OnInit {
  @Input('weatherItem') item: Weather;

  // weather: Weather = {
  //     city: 'Seoul',
  //     description: 'Snowy',
  //     temperature: -2,
  //     country: 'South Korea',
  //     icon: 'string'
  // }
  // weathers = WEATHERS;
  forecast: any;



  constructor(private globals: Globals, private _weatherService:WeatherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit():any {
      // console.log(this.item.city);
      // this._weatherService.getSevenDayForecast(cityName)
      //   .subscribe(result => {
      //       console.log(result);
      //   });
  }

  openDetails() {
      console.log(this.item.city)

    // this._weatherService.getSevenDayForecast(this.item.city)
    //     .pipe(map(result => (<any>result.dailyForecasts.forecastLocation.forecast)))
    //     .subscribe(result => {
    //         console.log(result);
    //         this.forecast = result;
    //         console.log(this.forecast);
            this.router.navigate(['/detail-report/', this.item.city]);
        // });

    // this.router.navigateByUrl('/details/paris');
    // this.router.navigate(['/detail-report']);
  }

}
