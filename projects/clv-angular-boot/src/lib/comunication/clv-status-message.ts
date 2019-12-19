import {ClvMessage} from './clv-message';
import {ClvMessageType} from './clv-message-type';

//@dynamic
export class ClvStatusMessage extends ClvMessage {
  private _statusCode: number | string;

  constructor(title: string,
              text: string,
              messageType: ClvMessageType = ClvMessageType.INFO,
              statutCode: number | string = 200) {
    super(title, text, messageType);
    this._statusCode = statutCode;
  }

  get statusCode(): number | string {
    return this._statusCode;
  }

  set statusCode(value: number | string) {
    this._statusCode = value;
  }

  static findByStatusCode(messages: ClvStatusMessage[], status: number | string) {
    return messages.find(value => {
      return value.statusCode === status;
    });
  }
}
