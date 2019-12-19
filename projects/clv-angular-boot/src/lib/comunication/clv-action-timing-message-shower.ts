import {ClvMessageShower} from './clv-message-shower';
import {ClvPromptActionManager} from '../events/clv-prompt-action-manager';
import {ClvTemporizer} from '../events/timing/clv-temporizer';

export abstract class ClvActionTimingMessageShower extends ClvMessageShower {
  private _actionsManager: ClvPromptActionManager;
  private _temporizer: ClvTemporizer;

  protected constructor(actionsManager: ClvPromptActionManager = new ClvPromptActionManager(),
                        temporizer: ClvTemporizer = new ClvTemporizer()) {
    super();
    this._actionsManager = actionsManager;
    this._temporizer = temporizer;
  }

  get temporizer(): ClvTemporizer {
    return this._temporizer;
  }

  set temporizer(value: ClvTemporizer) {
    this._temporizer = value;
  }

  get actionsManager(): ClvPromptActionManager {
    return this._actionsManager;
  }

  set actionsManager(value: ClvPromptActionManager) {
    this._actionsManager = value;
  }
}
