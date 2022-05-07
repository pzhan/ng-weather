import {
  Component,
  OnDestroy
} from '@angular/core'
import { Subscription } from 'rxjs'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnDestroy {

  currentConditions = []
  subscriptions: Subscription[] = []

  constructor(private weatherService: WeatherService) {
    this.currentConditions = this.weatherService.getCurrentConditions()
    this.subscriptions.push(
      this.weatherService.getUpdated$()
        .subscribe(() => {
          this.currentConditions = this.weatherService.getCurrentConditions()
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe()
    })
  }

}
