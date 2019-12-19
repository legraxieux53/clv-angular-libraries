import {ClvActionMessageShower} from './clv-action-message-shower';
import {ConfirmationService} from 'primeng/api';
import {ClvPromptAction} from '../events/clv-prompt-action';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClvConfirmPrimeNgShower extends ClvActionMessageShower {
  private acceptLabel: string;
  private rejectLabel: string;
  private acceptVisible: boolean;
  private rejectVisible: boolean;
  icon: string;
  key: string;
  accept: any = () => {};
  reject: any = () => {};
  constructor(public confirmationService: ConfirmationService) {
    super();
    this.key = undefined;
    this.icon = 'pi pi-exclamation-triangle';
    this.rejectVisible = false;
    this.acceptVisible = false;
    this.actionsManager.actions = [
      new ClvPromptAction(false, 'No'),
      new ClvPromptAction(true, 'Ok')
    ];
  }
  show() {
    const reject = this.actionsManager.actions.filter(v => (v.key === false) || (v.key === 0))[0];
    if (reject) {
      this.rejectLabel = reject.title;
      this.rejectVisible = true;
    }

    const accept = this.actionsManager.actions.filter(v => (v.key === true) || (v.key === 1))[0];
    if (accept) {
      this.acceptLabel = accept.title;
      this.acceptVisible = true;
    }

    this.confirmationService.confirm({
      key: this.key,
      message: this.message.text,
      header: this.message.title,
      icon: this.icon,
      rejectLabel: this.rejectLabel,
      rejectVisible: this.rejectVisible,
      acceptLabel: this.acceptLabel,
      acceptVisible: this.acceptVisible,
      accept: this.accept,
      reject: this.reject
    });
  }
}
