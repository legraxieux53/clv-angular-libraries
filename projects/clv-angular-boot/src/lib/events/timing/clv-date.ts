import {ClvDay} from './clv-day';
import {ClvMonth} from './clv-month';

export class ClvDate {
  private _year: number;
  private _month: ClvMonth;
  private _day: ClvDay;
  private _hour: number;
  private _minute: number;
  private _second: number;
  private _millisecond: number;

  constructor(year: number = 0,
              month: ClvMonth = 0,
              day: ClvDay = 0,
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

  get month(): ClvMonth {
    return this._month;
  }

  set month(value: ClvMonth) {
    this._month = value;
  }

  get day(): ClvDay {
    return this._day;
  }

  set day(value: ClvDay) {
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

  public now(): this {
    const date: any = new Date(Date.now());
    this._year = date.getFullYear();
    this._month = date.getMonth();
    this._day = date.getDay();
    this._hour = date.getHours();
    this._minute = date.getMinutes();
    this._second = date.getSeconds();
    this._millisecond = date.getMilliseconds();
    return this;
  }
}
