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

  countries: string[] = []
  countryName: string

  constructor(private countryService: CountryService,
              private locationService: LocationService) {
    const countryMap = countryService.getCountryMap()
    Object.keys(countryMap).forEach((key) => {
      this.countries.push(countryMap[key])
    })
  }

  addLocation(zipcode: string, countryName: string) {
    if (countryName) {
      const countryIso2Code = this.countryService.getCountryIso2Code(countryName)
      if (countryIso2Code) {
        const location = `${zipcode},${countryIso2Code}`
        this.addLocationButtonRef.subscribeToObservable(
          this.locationService.addLocation(location)
        );
      }
    }
  }

}
