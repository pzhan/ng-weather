import {
  Component,
  OnDestroy
} from '@angular/core'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnDestroy {

  currentConditions$

  constructor(private weatherService: WeatherService) {
    weatherService.startUpdates()
    this.currentConditions$ = weatherService.getCurrentConditions()
  }

  ngOnDestroy() {
    this.weatherService.stopUpdates()
  }

}
