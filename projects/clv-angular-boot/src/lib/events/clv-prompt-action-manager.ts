import {ClvPromptAction} from './clv-prompt-action';

export class ClvPromptActionManager {
  private _actions: ClvPromptAction[];

  constructor(actions: ClvPromptAction[] = []) {
    this._actions = actions;
  }

  get actions(): ClvPromptAction[] {
    return this._actions;
  }

  set actions(value: ClvPromptAction[]) {
    this._actions = value;
  }
}
