import {
  Component,
  ViewChild
} from '@angular/core'
import { CountryService } from '../country.service'
import { StateButtonComponent } from '../state-button/state-button.component'
import { LocationService } from '../location.service'

@Component({
  selector: 'app-location-entry',
  templateUrl: './location-entry.component.html'
})
export class LocationEntryComponent {

  _countries: string[] = []
  _countryName: string

  @ViewChild('addLocationButtonRef')
  private _addLocationButtonRef: StateButtonComponent

  constructor(private _countryService: CountryService,
              private _locationService: LocationService) {
    const countryMap = _countryService.getCountryMap()
    Object.keys(countryMap).forEach((key) => {
      this._countries.push(countryMap[key])
    })
  }

  _addLocation(zipcode: string, countryName: string) {
    if (countryName) {
      const countryIso2Code = this._countryService.getCountryIso2Code(countryName)
      if (countryIso2Code) {
        const location = `${zipcode},${countryIso2Code}`
        this._addLocationButtonRef.subscribeToObservable(
          this._locationService.addLocation(location)
        );
      }
    }
  }

}
