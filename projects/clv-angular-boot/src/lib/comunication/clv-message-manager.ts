import {ClvMessage} from './clv-message';

export class ClvMessageManager {
  private _messages: ClvMessage[];

  constructor(messages: ClvMessage[] = []) {
    this._messages = messages;
  }

  get messages(): ClvMessage[] {
    return this._messages;
  }

  set messages(value: ClvMessage[]) {
    this._messages = value;
  }
}
