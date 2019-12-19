import {Component, OnInit} from '@angular/core';
import {ClvCombo} from 'clv-angular-boot';
import {AdresseModel} from '../models/adresse.model';

@Component({
  selector: 'app-test-custom-combo-offline',
  template: `
    <clv-combo-template [formData]="formData"
      [indicatorText]="indicatorText"
      [libelleFn]="buildingLibelle"
      [valueFn]="buildingValue"
      [placeholder]="placeholder"
      [control]="control"></clv-combo-template>
  `
})
export class TestCustomComboOfflineComponent extends ClvCombo implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

  public buildingFormData(): any {
    return [
      new AdresseModel('dfd', 'dsfgdf'),
      new AdresseModel('jhgfds', 'jhgfds'),
      new AdresseModel('azert', 'jhgzertfds'),
    ];
  }

  public buildingValue(item: any): any {
    return item['ville'];
  }

  public buildingLibelle(item: any): any {
    return item['ville'] + ' <span>~teste</span>';
  }
}
