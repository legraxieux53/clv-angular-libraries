# ClvAngularBoot

This library is a bootstrap project for angular framework.

## Installation

Run `npm install clv-angular-boot --save` to install library and import ClvAngularBoot in your AppModule or other Module. 
And Enjoys.

## Usages
In your Module
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClvAngularBootModule} from 'clv-angular-boot'; // < ---- import module

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        // ...
        ClvAngularBootModule, // <----- add module here
        // ...
    ]
})
export class AppModule {
}

```
### Manage forms
1/- First create your models
````typescript
export class AdresseModel {
  ville: string;
  pays: string;

  constructor(ville: string, pays: string) {
    this.ville = ville;
    this.pays = pays;
  }
}

export class TelephoneModel {
  numero = 2;
  adresse: AdresseModel = new AdresseModel('', '');
}


export class PersonneModel {
  nom: string = 'John';
  prenoms: string = 'Doe';
  adresse: AdresseModel = new AdresseModel('', '');
  telephones: TelephoneModel[] = [new TelephoneModel()];
}
````
2/- Create a form component
````typescript
@Component({
  selector: 'app-form-test',
  template: `
    <form [formGroup]="formGroup" (submit)="sendForm()">
    
      <!-- simple data -->
      <input placeholder="nom" formControlName="nom"/>
      <input placeholder="prenoms" formControlName="prenoms"/>
      
      <!-- object data -->
      <div formGroupName="adresse">
        <input placeholder="ville" formControlName="ville"/>
        <input placeholder="pays" formControlName="pays"/>
      </div>
      
      <!-- collection datas -->
      <div formArrayName="telephones">
        <h3>telephones</h3>
        <button type="button" (click)="addSmartFormGroup(formGroup, objectsFindMasks(personne)[0], 'telephones')">Ajouter</button>
        <div *ngFor="let tel of getControls(formGroup, 'telephones');let i=index">
          <button type="button" (click)="removeSmartFormGroup(formGroup, i, 'telephones')">Supprimer</button>
          <div [formGroupName]="i">
            <input placeholder="numero" formControlName="numero"/>
            <div formGroupName="adresse">
              <input placeholder="pays" formControlName="pays"/>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Send</button>
      <button type="reset">reset</button>
    </form>
  `
})
export class FormTestComponent extends ClvForm implements OnInit {
  personne = new PersonneModel();
  
  constructor(public httpClient: HttpClient,
              alertShower: ClvAlertMessageShower,
              toastShower: ClvToastMessageShower,
              snakeShower: ClvSnakebarMessageShower) {
    super(httpClient, alertShower, toastShower, snakeShower);
    this.requestSetter.url = 'http://localhost:4200';
    this.requestSetter.method = ClvRequestMethod.POST;
  }

  ngOnInit(): void {
    this.buildFormByObject(new PersonneModel());
  }
}
````
### APIs
#### 1- ClvRequest
Create a request object.
#### 2- ClvRequestSender
Send <code>ClvRequest</code> by call of <code>sendRequest(request: ClvRequest)</code> method, and return an <code>Observable<HttpResponse<any>></code>
#### 3- ClvForm
Create an angular reactive form from any object given in parameter of <code>buildFormByObject(obj: any)</code>
