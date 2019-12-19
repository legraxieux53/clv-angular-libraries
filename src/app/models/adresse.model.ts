export class AdresseModel {
  ville: string;
  pays: string;

  constructor(ville: string = null, pays: string = null) {
    this.ville = ville;
    this.pays = pays;
  }
}
