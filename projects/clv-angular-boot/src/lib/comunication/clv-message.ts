import {ClvMessageType} from './clv-message-type';

export class ClvMessage {
  private _title: string;
  private _text: string;
  private _messageType: ClvMessageType;

  constructor(title: string = 'Welcome',
              text: string = 'HI! Are are You!',
              messageType: ClvMessageType = ClvMessageType.INFO) {
    this._title = title;
    this._text = text;
    this._messageType = messageType;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get messageType(): ClvMessageType {
    return this._messageType;
  }

  set messageType(value: ClvMessageType) {
    this._messageType = value;
  }
}
