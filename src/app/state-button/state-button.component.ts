import { Component } from '@angular/core'
import { Observable } from 'rxjs'

enum ButtonState {
  RUNNING = 'running',
  READY = 'ready',
  DONE = 'done'
}

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html'
})
export class StateButtonComponent {

  ButtonState = ButtonState
  _state: ButtonState = ButtonState.READY

  subscribeToObservable(obs: Observable<any>) {
    if (!obs) {
      return
    }
    this._state = ButtonState.RUNNING
    obs.subscribe(() => {
      this._state = ButtonState.DONE
      setTimeout(() => {
        this._state = ButtonState.READY
      }, 500)
    })
  }
}
