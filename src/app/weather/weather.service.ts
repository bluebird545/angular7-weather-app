import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { catch } from 'rxjs/operators';

import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';

import 'rxjs';
import { WeatherItem } from './item/weather-item';
import { Weather } from './weather';
import { WEATHER_DATA } from './weather.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private appId: string;
    private appCode: string;

    constructor(private http: HttpClient) {
        this.appId = "/* appId */";
        this.appCode = "/* appCode */";

    }
    getWeatherData() {
        return WEATHER_DATA;
    }
    addWeatherData(weather: Weather) {
        WEATHER_DATA.push(weather);
        console.log(WEATHER_DATA);
    }
    isExistWeather(weather: Weather): any {
        return WEATHER_DATA.some(elem => (elem.city == weather.city));
        // return WEATHER_DATA.some(elem => (elem.city == weather.city && elem.country == weather.country));
    }
    searchWeatherInfo(city: string): Observable<any> {
        // let url = 'https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=' + city + '&app_id=' + this.appId + '&app_code=' + this.appCode;
        let url = 'https://weather.cit.api.here.com/weather/1.0/report.json?app_id=' + this.appId + '&app_code=' + this.appCode + '&product=observation&name=' + city;


        return this.http.jsonp(url, "jsonpCallback");
            // .catch(this.handleError);
            // .pipe(map(response => (<any>response).dailyForecasts.forecastLocation ))
            // .subscribe(response => {
            //     console.log(response);
            // }, error => {
            //     console.error(error);
            // });
            // .catch(
            //     error => {
            //         return Observable.of<any>(error.json());
            //     }
            // );
    }
    getSevenDayForecast(city: string): Observable<any> {
        let url = 'https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=' + city + '&app_id=' + this.appId + '&app_code=' + this.appCode;

        return this.http.jsonp(url, "jsonpCallback");
    }
    private handleError(error: any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      errMsg = error.message ? error.message : error.toString();
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}
