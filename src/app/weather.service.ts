import { Injectable } from '@angular/core';
import {
  forkJoin,
  interval,
  Observable,
  Subject
} from 'rxjs'

import { tap } from 'rxjs/operators'
import { HttpWeatherService } from './http-weather.service'

// Now only manages weather state
@Injectable()
export class WeatherService {

  private static updateDelay = 30000

  private currentConditions = [];
  private updated$ = new Subject<boolean>()

  constructor(private httpWeatherService: HttpWeatherService) {
    this.init()
  }

  addCurrentConditions(zipcode: string): void {
    this.httpWeatherService.getCurrentConditions(zipcode)
      .subscribe(data => this.currentConditions.push({zip: zipcode, data: data})
    )
  }

  removeCurrentConditions(zipcode: string) {
    for (let i in this.currentConditions){
      if (this.currentConditions[i].zip == zipcode)
        this.currentConditions.splice(+i, 1);
    }
  }

  getCurrentConditions(): any[] {
    return this.currentConditions;
  }

  getUpdated$(): Observable<boolean> {
    return this.updated$
  }

  private init() {
    interval(WeatherService.updateDelay).subscribe(() => {
      // [zhanp] there seems to be no api to retrieve multiple condition at once
      // should be ok anyway since through user interface we won't have a large number of conditions to retrieve
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
        this.updated$.next(true)
      })
    })
  }

}
