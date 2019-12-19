import {Component, OnInit} from '@angular/core';
import {
  ClvAlertMessageShower,
  ClvMessage,
  ClvMessageType,
  ClvPromptAction,
  ClvPromptActionPriority,
  ClvRequestMethod,
  ClvRequestSender,
  ClvSnakebarMessageShower,
  ClvToastMessageShower
} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {ClvTsUtilsCommonsJs} from '../../projects/clv-ts-utils/src/lib/utils/clv-ts-utils-commons-js';
import {ThousandSeparatorMode} from '../../projects/clv-ts-utils/src/lib/utils/thousand-separator-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '123456789.948764';
  title2 = '123456789.948764';
  constructor(public httpClient: HttpClient,
              public toastShower: ClvToastMessageShower,
              public alertShower: ClvAlertMessageShower,
              public snakeBarShower: ClvSnakebarMessageShower) {
    this.snakeBarShower.temporizer.time.reset();
    this.snakeBarShower.temporizer.time.second = 3;
  }
  ngOnInit(): void {
    console.log(ClvTsUtilsCommonsJs.jsType({}));
    this.title2 = ClvTsUtilsCommonsJs.thousandSeparator(this.title, 2, ThousandSeparatorMode.DEFAULT);
  }
  getMessage() {
    const message = new ClvMessage();
    message.messageType = ClvMessageType.SUCCESS;
    return message;
  }
  asToast() {
    this.toastShower.message = this.getMessage();
    this.toastShower.show();
  }

  asSnakeBar() {
    this.snakeBarShower.message = this.getMessage();
    this.snakeBarShower.actionsManager.actions = [];
    this.snakeBarShower.show();
  }
  asSnakeBarAction() {
    this.snakeBarShower.message = this.getMessage();
    this.snakeBarShower.actionsManager.actions = [
      new ClvPromptAction(0, 'Oui', ClvPromptActionPriority.LOW),
      new ClvPromptAction(1, 'Non', ClvPromptActionPriority.HIGHT),
    ];
    this.snakeBarShower.show();
  }

  asAlert() {
    this.alertShower.message = this.getMessage();
    this.alertShower.actionsManager.actions = [
      new ClvPromptAction(0, 'Oui', ClvPromptActionPriority.LOW),
      new ClvPromptAction(1, 'Non', ClvPromptActionPriority.HIGHT),
    ];
    this.alertShower.show();
  }

  sendReq() {
    const requestSender = new ClvRequestSender(this.httpClient);
    requestSender.request.url = 'http://192.168.10.108:2000/api/ReCtrl/GetTypePersonnesByCriteriasds';
    requestSender.request.method = ClvRequestMethod.POST;
    requestSender.request.data = {d: 'dfg'};
    requestSender.afterCannotSend();
    requestSender.sendRequest().subscribe(response => {
      console.log(response);
    });
  }
}
