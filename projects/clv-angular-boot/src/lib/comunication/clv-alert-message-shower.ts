import {ClvActionMessageShower} from './clv-action-message-shower';
import {MatDialog} from '@angular/material';
import {ClvAlertMessageDialogComponent} from './clv-alert-message-dialog.component';
import {ClvAlertMessageData} from './clv-alert-message-data';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClvAlertMessageShower extends ClvActionMessageShower {
  private _size: string;
  private _top: string;
  private _customClass: string;

  constructor(public dialog: MatDialog) {
    super();
    this._size = '50%';
    this._top = '20px';
    this._customClass = 'custom-dialog-container';
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get top(): string {
    return this._top;
  }

  set top(value: string) {
    this._top = value;
  }

  get customClass(): string {
    return this._customClass;
  }

  set customClass(value: string) {
    this._customClass = value;
  }

  public show() {
    const data: ClvAlertMessageData = {message: this.message, actions: this.actionsManager.actions};
    return this.dialog.open(ClvAlertMessageDialogComponent, {
      width: this.size,
      position: {top: this.top},
      disableClose: true,
      panelClass: this.customClass,
      data: data
    });
  }
}
