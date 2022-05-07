import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input()
  items: string[]

  @Input()
  placeholder: string

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>()

  _suggestedItems
  _isDropdownDisplayed: boolean = false
  private _value: string

  get value(): string {
    return this._value
  }

  @Input()
  set value(value: string) {
    this._value = value
    this._updateSuggestedItems()
  }

  _onItemClick(value) {
    this.value = value
    this._isDropdownDisplayed = false
  }

  _onFocus() {
    this._isDropdownDisplayed = true
  }

  private _updateSuggestedItems() {
    if (this.items) {
      if (this.value) {
        this._suggestedItems = this.items.filter((item) => {return item && (item.toLowerCase().indexOf(this.value.toLowerCase()) !== -1)})
      } else {
        this._suggestedItems = [...this.items]
      }
    } else {
      this._suggestedItems = []
    }
  }
}
