import {ClvMessage} from './clv-message';
import {ClvPromptAction} from '../events/clv-prompt-action';

export interface ClvAlertMessageData {
  message: ClvMessage;
  actions: ClvPromptAction[];
}
