import {
  Component,
  ViewChild
} from '@angular/core'
import { StateButtonComponent } from '../state-button/state-button.component'
import { LocationService } from '../location.service'

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  @ViewChild('addLocationButtonRef')
  addLocationButtonRef: StateButtonComponent

  constructor(private locationService: LocationService) { }

  addLocation(zipcode: string){
    this.addLocationButtonRef.subscribeToObservable(this.locationService.addLocation(zipcode));
  }

}
