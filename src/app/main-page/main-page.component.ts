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

  _currentConditions$

  constructor(private _weatherService: WeatherService) {
    _weatherService.startUpdates()
    this._currentConditions$ = _weatherService.getCurrentConditions()
  }

  ngOnDestroy() {
    this._weatherService.stopUpdates()
  }

}
