import { Injectable } from '@angular/core';
import {
  forkJoin,
  interval,
  Observable,
  ReplaySubject,
  Subject
} from 'rxjs'

import { tap } from 'rxjs/operators'
import { HttpWeatherService } from './http-weather.service'

// Now only manages weather state
@Injectable()
export class WeatherService {

  private static updateDelay = 30000

  private currentConditions = [];
  private currentConditions$ = new ReplaySubject<any[]>(1)
  private intervalSubscription

  constructor(private httpWeatherService: HttpWeatherService) {
  }

  addCurrentConditions(zipcode: string): Observable<any> {
    const currentCondition$ = new Subject()
    this.httpWeatherService.getCurrentConditions(zipcode)
      .subscribe(data => {
        this.currentConditions.push({zip: zipcode, data: data})
        this.currentConditions$.next(this.currentConditions)
        currentCondition$.next(data)
      }
    )

    return currentCondition$
  }

  removeCurrentConditions(zipcode: string): void {
    for (let i in this.currentConditions){
      if (this.currentConditions[i].zip === zipcode) {
        this.currentConditions.splice(+i, 1);
        this.currentConditions$.next(this.currentConditions)
      }
    }
  }

  getCurrentConditions(): Observable<any[]> {
    return this.currentConditions$;
  }

  startUpdates() {
    this.intervalSubscription = interval(WeatherService.updateDelay).subscribe(() => {
      const newCurrentConditions = []
      const obsArray = []
      this.currentConditions.forEach((condition) => {
        obsArray.push(
          this.httpWeatherService.getCurrentConditions(condition.zip)
            .pipe(tap((data) => { newCurrentConditions.push({zip: condition.zip, data: data})}))
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
