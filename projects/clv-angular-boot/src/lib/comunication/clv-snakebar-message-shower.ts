import {ClvActionTimingMessageShower} from './clv-action-timing-message-shower';
import {MatSnackBar} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClvSnakebarMessageShower extends ClvActionTimingMessageShower{

  constructor(public snakeBar: MatSnackBar) {
    super();
    this.temporizer.time.second = 5;
  }

  public show(): any {
    if (this.actionsManager.actions && this.actionsManager.actions.length > 0) {
      return this.snakeBar.open(this.message.text, this.actionsManager.actions[0].title);
    } else {
      return this.snakeBar.open(this.message.text, undefined, {duration: this.temporizer.inMillisecond()});
    }
  }
}
