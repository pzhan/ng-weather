import {
  Component,
  ViewChild
} from '@angular/core'
import { CountryService } from '../country.service'
import { StateButtonComponent } from '../state-button/state-button.component'
import { LocationService } from '../location.service'

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  @ViewChild('addLocationButtonRef')
  addLocationButtonRef: StateButtonComponent

  zipcode: string
  countries

  constructor(countryService: CountryService,
              private locationService: LocationService) {
    this.countries = countryService.getCountries()

  }

  addLocation(zipcode: string){
    this.addLocationButtonRef.subscribeToObservable(this.locationService.addLocation(zipcode));
  }

}
