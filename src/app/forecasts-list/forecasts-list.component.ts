import { Component } from '@angular/core';
import { HttpWeatherService } from '../http-weather.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: any;

  constructor(private httpWeatherService: HttpWeatherService, route : ActivatedRoute) {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      httpWeatherService.getForecast(this.zipcode)
        .subscribe(data => this.forecast = data);
    });
  }
}
