import {ClvStatusMessage} from './clv-status-message';

//@dynamic
export class ClvStatusMessageManager {
  private _messages: ClvStatusMessage[];

  constructor(message: ClvStatusMessage[] = []) {
    this._messages = message;
  }

  get messages(): ClvStatusMessage[] {
    return this._messages;
  }

  set messages(value: ClvStatusMessage[]) {
    this._messages = value;
  }

  static findMessageByStatus(messages: ClvStatusMessage[], status: number) {
    return messages.find(value => {
      return value.statusCode === status;
    })
  }
}

