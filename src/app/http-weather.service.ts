import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { WeatherCondition } from '../shared/interfaces/weather-condition'

@Injectable()
export class HttpWeatherService {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(private http: HttpClient) { }

  getCurrentConditions(location: string): Observable<WeatherCondition> {
    return this.http.get<WeatherCondition>(`${HttpWeatherService.URL}/weather?zip=${location}&units=imperial&APPID=${HttpWeatherService.APPID}`)
  }

  getForecast(location: string): Observable<any> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${HttpWeatherService.URL}/forecast/daily?zip=${location}&units=imperial&cnt=5&APPID=${HttpWeatherService.APPID}`);
  }

  getWeatherIcon(id){
    if (id >= 200 && id <= 232)
      return HttpWeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return HttpWeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return HttpWeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return HttpWeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return HttpWeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return HttpWeatherService.ICON_URL + "art_fog.png";
    else
      return HttpWeatherService.ICON_URL + "art_clear.png";
  }

}
