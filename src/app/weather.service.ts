import { Injectable } from '@angular/core';
import {
  forkJoin,
  interval,
  Observable,
  ReplaySubject,
  Subject
} from 'rxjs'

import { tap } from 'rxjs/operators'
import { WeatherCondition } from '../shared/interfaces/weather-condition'
import { HttpWeatherService } from './http-weather.service'

// Now only manages weather state
@Injectable()
export class WeatherService {

  private static _updateDelay = 30000

  private _currentConditions: WeatherCondition[] = [];
  private _currentConditions$ = new ReplaySubject<any[]>(1)
  private _intervalSubscription

  constructor(private _httpWeatherService: HttpWeatherService) {
  }

  addCurrentConditions(location: string): Observable<WeatherCondition> {
    const currentCondition$ = new Subject<WeatherCondition>()
    this._httpWeatherService.getCurrentConditions(location)
      .subscribe(data => {
        this._currentConditions.push({location: location, data: data})
        this._currentConditions$.next(this._currentConditions)
        currentCondition$.next({location: location, data: data})
      },
        (error) => {
          currentCondition$.error(error)
        }
    )

    return currentCondition$
  }

  removeCurrentConditions(location: string): void {
    for (let i in this._currentConditions){
      if (this._currentConditions[i].location === location) {
        this._currentConditions.splice(+i, 1);
        this._currentConditions$.next(this._currentConditions)
      }
    }
  }

  getCurrentConditions(): Observable<WeatherCondition[]> {
    return this._currentConditions$;
  }

  startUpdates() {
    this._intervalSubscription = interval(WeatherService._updateDelay).subscribe(() => {
      const newCurrentConditions = []
      const obsArray = []
      this._currentConditions.forEach((condition) => {
        obsArray.push(
          this._httpWeatherService.getCurrentConditions(condition.location)
            .pipe(tap((data) => { newCurrentConditions.push({location: condition.location, data: data})}))
        )
      })
      // wait for all new weather conditions to be retrieved and then emit update state
      forkJoin(obsArray).subscribe(() => {
        this._currentConditions = newCurrentConditions
        this._currentConditions$.next(this._currentConditions)
      })
    })
  }

  stopUpdates() {
    this._intervalSubscription.unsubscribe()
  }

}
