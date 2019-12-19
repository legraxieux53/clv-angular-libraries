import {ClvPromptActionPriority} from './clv-prompt-action-priority';

export class ClvPromptAction {
  private _key: boolean|number;
  private _title: string;
  private _priority: ClvPromptActionPriority;


  constructor(key: boolean | number,
              title: string,
              priority: ClvPromptActionPriority = ClvPromptActionPriority.LOW) {
    this._key = key;
    this._title = title;
    this._priority = priority;
  }

  get key(): boolean | number {
    return this._key;
  }

  set key(value: boolean | number) {
    this._key = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get priority(): ClvPromptActionPriority {
    return this._priority;
  }

  set priority(value: ClvPromptActionPriority) {
    this._priority = value;
  }
}
