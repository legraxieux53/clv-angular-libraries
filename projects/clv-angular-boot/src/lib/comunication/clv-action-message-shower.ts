import {ClvMessageShower} from './clv-message-shower';
import {ClvPromptActionManager} from '../events/clv-prompt-action-manager';

export abstract class ClvActionMessageShower extends ClvMessageShower {
  private _actionsManager: ClvPromptActionManager;

  protected constructor(actionsManager: ClvPromptActionManager = new ClvPromptActionManager()) {
    super();
    this._actionsManager = actionsManager;
  }

  get actionsManager(): ClvPromptActionManager {
    return this._actionsManager;
  }

  set actionsManager(value: ClvPromptActionManager) {
    this._actionsManager = value;
  }
}
