import {ClvMessage} from './clv-message';

export abstract class ClvMessageShower {
  private _message: ClvMessage;

  protected constructor(message: ClvMessage = new ClvMessage()) {
    this._message = message;
  }

  get message(): ClvMessage {
    return this._message;
  }

  set message(value: ClvMessage) {
    this._message = value;
  }

  public abstract show();
}
