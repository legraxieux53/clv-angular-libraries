export class ClvTime {
  private _year: number;
  private _month: number;
  private _day: number;
  private _hour: number;
  private _minute: number;
  private _second: number;
  private _millisecond: number;

  constructor(year: number = 0,
              month: number = 0,
              day: number = 0,
              hour: number = 0,
              minute: number = 0,
              second: number = 0,
              millisecond: number = 0) {
    this._year = year;
    this._month = month;
    this._day = day;
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._millisecond = millisecond;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
  }

  get minute(): number {
    return this._minute;
  }

  set minute(value: number) {
    this._minute = value;
  }

  get second(): number {
    return this._second;
  }

  set second(value: number) {
    this._second = value;
  }

  get millisecond(): number {
    return this._millisecond;
  }

  set millisecond(value: number) {
    this._millisecond = value;
  }

  public reset(): this {
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
    return this;
  }
}
