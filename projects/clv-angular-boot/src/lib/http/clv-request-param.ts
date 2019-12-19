//@dynamic
export class ClvRequestParam {
  private _key: string;
  private _value: string;

  constructor(key: string = null, value: string = null) {
    this._key = key;
    this._value = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  static findByKey(headers: ClvRequestParam[], key: string) {
    return headers.find(value => {
      return value.key === key;
    });
  }
}
