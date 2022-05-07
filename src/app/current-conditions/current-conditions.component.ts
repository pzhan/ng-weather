import {
  Component,
  Input
} from '@angular/core'
import { Router } from '@angular/router'
import { HttpWeatherService } from '../http-weather.service'
import { LocationService } from '../location.service'

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  @Input()
  conditions: any[]

  constructor(public _httpWeatherService: HttpWeatherService,
              public _locationService: LocationService,
              private _router: Router) {
  }

  showForecast(location: string) {
    this._router.navigate(['/forecast', location])
  }
}
