export class PaysModel {
  IdPays: number;
  Libelle: string;
  LibelleNationnalite: string;

  constructor(IdPays: number, Libelle: string, LibelleNationnalite: string) {
    this.IdPays = IdPays;
    this.Libelle = Libelle;
    this.LibelleNationnalite = LibelleNationnalite;
  }
}
