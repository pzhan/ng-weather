import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { WeatherCondition } from '../shared/interfaces/weather-condition'
import {WeatherService} from "./weather.service";

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations: string[] = [];

  constructor(private weatherService: WeatherService) {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
    for (let loc of this.locations)
      this.weatherService.addCurrentConditions(loc);
  }

  addLocation(location: string): Observable<WeatherCondition> {
    this.locations.push(location);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    return this.weatherService.addCurrentConditions(location);
  }

  removeLocation(location: string) {
    let index = this.locations.indexOf(location);
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.weatherService.removeCurrentConditions(location);
    }
  }
}
