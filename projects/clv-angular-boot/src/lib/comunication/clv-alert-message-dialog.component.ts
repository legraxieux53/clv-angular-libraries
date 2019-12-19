import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ClvAlertMessageData} from './clv-alert-message-data';
import {ClvMessageType} from './clv-message-type';
import {ClvPromptAction} from '../events/clv-prompt-action';
import {ClvPromptActionPriority} from '../events/clv-prompt-action-priority';

@Component({
  selector: 'clv-alert-dialog',
  template: `
    <div class="modal-content">
      <div class="modal-header" [ngClass]="{'clv-bg-info': isInfo(),
        'clv-bg-warning': isWarning(),
        'clv-bg-danger': isError(),
        'clv-bg-success': isSuccess()}">
        {{dialogData?.message?.title}}
        <button class="close" [ngClass]="{'clv-bg-info': isInfo(),
        'clv-bg-warning': isWarning(),
        'clv-bg-danger': isError(),
        'clv-bg-success': isSuccess()}" (click)="closeDialog(false)" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <span [innerHtml]="dialogData?.message?.text"></span>
      </div>
      <div class="modal-footer">
        <button class="mat-raised-button" *ngFor="let act of dialogData?.actions"
                [ngClass]="{'clv-bg-info': isInfo() && isPriorityHight(act),
        'clv-bg-warning': isWarning()&& isPriorityHight(act),
        'clv-bg-danger': isError()&& isPriorityHight(act),
        'clv-bg-success': isSuccess()&& isPriorityHight(act)}"
                (click)="closeDialog(act?.key)" mat-raised-button>{{act?.title}}</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-header {
      padding: 15px;
      display: flex;
      justify-content: space-between;
    }

    .modal-footer {
      padding: 10px 15px;
    }

    .modal-body {
      padding: 10px 15px;
    }

    button.close {
      background: transparent;
      border: none;
      text-shadow: 0px 0px 5px;
      cursor: pointer;
    }
  `]
})
export class ClvAlertMessageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClvAlertMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: ClvAlertMessageData) {
  }

  isWarning(): boolean {
    return this.dialogData.message.messageType === ClvMessageType.WARNING;
  }
  isInfo(): boolean {
    return this.dialogData.message.messageType === ClvMessageType.INFO;
  }
  isSuccess(): boolean {
    return this.dialogData.message.messageType === ClvMessageType.SUCCESS;
  }
  isError(): boolean {
    return this.dialogData.message.messageType === ClvMessageType.ERROR;
  }

  isPriorityHight(action: ClvPromptAction): boolean {
    return action.priority === ClvPromptActionPriority.HIGHT;
  }

  public closeDialog(data: any) {
    this.dialogRef.close(data);
  }
}
