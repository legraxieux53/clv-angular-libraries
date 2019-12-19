import {ClvMessageShower} from './clv-message-shower';
import {ClvMessageType} from './clv-message-type';
import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClvToastMessageShower extends ClvMessageShower {

  constructor(public toastService: ToastrService) {
    super();
  }

  public show() {
    switch (this.message.messageType) {
      case ClvMessageType.INFO:
        this.toastService.info(this.message.text, this.message.title);
        break;
      case ClvMessageType.SUCCESS:
        this.toastService.success(this.message.text, this.message.title);
        break;
      case ClvMessageType.WARNING:
        this.toastService.warning(this.message.text, this.message.title);
        break;
      case ClvMessageType.ERROR:
        this.toastService.error(this.message.text, this.message.title);
        break;
      default:
        this.toastService.info(this.message.text, this.message.title);
    }
  }
}
