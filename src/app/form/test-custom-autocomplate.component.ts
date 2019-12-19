import {Component, OnInit} from '@angular/core';
import {AdresseModel} from '../models/adresse.model';
import {ClvAutocomplete} from 'clv-angular-boot';

@Component({
  selector: 'app-test-autocomplate',
  template: `
    <clv-autocomplate-template
      [formData]="formData"
      [libelleFn]="buildingLibelle"
      [valueFn]="buildingValue"
      [placeholder]="placeholder"
      [control]="control"
      [searchControl]="searchControl"
      [searchParams]="searchParams"></clv-autocomplate-template>
  `
})
export class TestCustomAutocomplateComponent extends ClvAutocomplete implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

  public buildingSearchParams(): {key: string, value: string}[] {
    return [
      {key: 'Pays', value: 'pays'},
      {key: 'Ville', value: 'ville'}
    ];
  }

  public filter(value: any): any {
    return [
      new AdresseModel('abidjan', 'cotef divoire'),
      new AdresseModel('yakro', 'ivory cost'),
      new AdresseModel('bassam', 'ci des cis'),
    ].filter(option => option[this.searchControl.value].includes(value));
  }

  public buildingLibelle(item: any): any {
    return `<div>Pays: ${item['pays']}</div>
            <div>Ville: ${item['ville']}</div>`;
  }
}
