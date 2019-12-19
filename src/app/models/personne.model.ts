import {AdresseModel} from './adresse.model';
import {TelephoneModel} from './telephone.model';

export class PersonneModel {
  nom: string = null;
  prenoms: string = null;
  adresse: AdresseModel = new AdresseModel();
  telephones: TelephoneModel[] = [new TelephoneModel()];
}
