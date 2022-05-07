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

  private static updateDelay = 30000

  private currentConditions: WeatherCondition[] = [];
  private currentConditions$ = new ReplaySubject<any[]>(1)
  private intervalSubscription

  constructor(private httpWeatherService: HttpWeatherService) {
  }

  addCurrentConditions(location: string): Observable<WeatherCondition> {
    const currentCondition$ = new Subject<WeatherCondition>()
    this.httpWeatherService.getCurrentConditions(location)
      .subscribe(data => {
        this.currentConditions.push({location: location, data: data})
        this.currentConditions$.next(this.currentConditions)
        currentCondition$.next({location: location, data: data})
      }
    )

    return currentCondition$
  }

  removeCurrentConditions(location: string): void {
    for (let i in this.currentConditions){
      if (this.currentConditions[i].location === location) {
        this.currentConditions.splice(+i, 1);
        this.currentConditions$.next(this.currentConditions)
      }
    }
  }

  getCurrentConditions(): Observable<WeatherCondition[]> {
    return this.currentConditions$;
  }

  startUpdates() {
    this.intervalSubscription = interval(WeatherService.updateDelay).subscribe(() => {
      const newCurrentConditions = []
      const obsArray = []
      this.currentConditions.forEach((condition) => {
        obsArray.push(
          this.httpWeatherService.getCurrentConditions(condition.location)
            .pipe(tap((data) => { newCurrentConditions.push({location: condition.location, data: data})}))
        )
      })
      // wait for all new weather conditions to be retrieved and then emit update state
      forkJoin(obsArray).subscribe(() => {
        this.currentConditions = newCurrentConditions
        this.currentConditions$.next(this.currentConditions)
      })
    })
  }

  stopUpdates() {
    this.intervalSubscription.unsubscribe()
  }

}
