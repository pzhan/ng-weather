import {
  Component,
  Input
} from '@angular/core'
import { HttpWeatherService } from '../http-weather.service'
import {LocationService} from "../location.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  @Input()
  conditions: any[]

  constructor(private httpWeatherService: HttpWeatherService,
              private locationService: LocationService,
              private router: Router) {
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
