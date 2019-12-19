import {ClvTime} from './clv-time';

export class ClvTemporizer {
  private _time: ClvTime;

  constructor(time: ClvTime = new ClvTime()) {
    this._time = time;
  }

  get time(): ClvTime {
    return this._time;
  }

  set time(value: ClvTime) {
    this._time = value;
  }

  public inHour(): number {
    return ((this.time.millisecond / 1000) / 60) / 60 +
      (this.time.second / 60) / 60 +
      this.time.minute / 60 +
      this.time.hour +
      this.time.day * 24 +
      this.time.month * 30 * 24 +
      this.time.year * 12 * 30 * 24;
  }

  public inMillisecond(): number {
    return this.time.millisecond +
      this.time.second * 1000 +
      this.time.minute * 60 * 1000 +
      this.time.hour * 60 * 60 * 1000 +
      this.time.day * 24 * 60 * 60 * 1000 +
      this.time.month * 30 * 24 * 60 * 60 * 1000 +
      this.time.year * 12 * 30 * 24 * 60 * 60 * 1000;
  }

  public inMinute(): number {
    return (this.time.millisecond / 1000) / 60 +
      this.time.second / 60 +
      this.time.minute +
      this.time.hour * 60 +
      this.time.day * 24 * 60 +
      this.time.month * 30 * 24 * 60 +
      this.time.year * 12 * 30 * 24 * 60;
  }

  public inSecond(): number {
    return this.time.millisecond / 1000 +
      this.time.second +
      this.time.minute * 60 +
      this.time.hour * 60 * 60 +
      this.time.day * 24 * 60 * 60 +
      this.time.month * 30 * 24 * 60 * 60 +
      this.time.year * 12 * 30 * 24 * 60 * 60;
  }
}
