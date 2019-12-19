import {ClvMessageShower} from './clv-message-shower';
import {ClvTemporizer} from '../events/timing/clv-temporizer';

export abstract class ClvTimingMessageShower extends ClvMessageShower {
  private _temporizer: ClvTemporizer;

  protected constructor(temporizer: ClvTemporizer = new ClvTemporizer()) {
    super();
    this._temporizer = temporizer;
  }

  get temporizer(): ClvTemporizer {
    return this._temporizer;
  }

  set temporizer(value: ClvTemporizer) {
    this._temporizer = value;
  }
}
