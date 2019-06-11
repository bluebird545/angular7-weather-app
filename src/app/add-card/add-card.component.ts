import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Globals} from '../globals';

import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { WeatherService } from '../weather/weather.service';
import { Weather } from '../weather/weather';


@Component({
  selector: 'add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
  providers: [WeatherService]
})
export class AddCardComponent implements OnInit {


    errorMessage: string;
    sevenDayForecastData: any;
    weatherForecastData: any = [];
    weatherLocationData: any;
    disabledForecastButton: boolean;

    // weather: Weather = new Weather();
    // weather: Weather;
    cityName: string;

    constructor(private globals: Globals, private _weatherService:WeatherService) {
    }

    ngOnInit() {}

    // onSubmit(cityName: string) {
    //     console.log("Get weather for "+cityName);
    //     this._weatherService.searchWeatherInfo(cityName)
    //         .pipe(map(result => (<any>result)))
    //         .subscribe(result => {
    //
    //             console.log(result);
    //
    //             this.onResetControls();
    //
    //         }, error => {
    //             console.error(error);
    //         });
    // }
    onSubmit(cityName: string) {
        console.log("Get weather for "+cityName);
        this._weatherService.searchWeatherInfo(cityName)
            .pipe(map(result => (<any>result.observations.location[0])))
            .subscribe(result => {
                let city        = result.city;
                let description = result.observation[0].iconName;
                let temperature = result.observation[0].temperature;
                // let temperature = ((result.observation[0].temperature * (9 / 5)) + 32).toFixed(2);
                let country     = result.country;
                let icon        = result.observation[0].iconLink;

                const weather = new Weather(city, description, temperature, country, icon);
                console.log(weather);

                this._weatherService.addWeatherData(weather);

                this.onResetControls();

            }, error => {
                console.error(error);
            });
    }

    onSearchLocation(cityName:string) {
        this.disabledForecastButton = false;
        // console.log(cityName);
        // this.isSearching = true;
        // this.searchStream.next(value);
    }

    onSubmitDatabinding() {
        console.log('Inside the two way', this.cityName);
        // this._weatherService.searchWeatherInfo(this.cityName)
        //     .subscribe(data => { this.weatherForecastData = data }, error => this.errorMessage = <any>error);
        // this.onResetControls();
    }

    onSearchLocationWithEvent(event: Event) {
        console.log('Control event value', (<HTMLInputElement>event.target).value);
        this.cityName = (<HTMLInputElement>event.target).value;
        this.disabledForecastButton = false;
    }

    onResetControls() {
        this.cityName = '';
        // this.disabledForecastButton = true;
    }



}
