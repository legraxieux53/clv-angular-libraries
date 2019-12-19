import {ThousandSeparatorMode} from './thousand-separator-mode';
import {ClvFilesUtils} from './clv-files-utils';

//@dynamic
export class ClvTsUtilsCommonsJs {
  /**
   * Alias of jsType. Get Type of any given element
   */
  public static typeOf(obj: any): string {
    return this.jsType(obj);
  }

  /**
   * Return a sublist from a list that has column that contain a certain value.
   */
  public static enumarableFromListEqual(list: any[], column: string, value: any) {
    const subList: any[] = [];
    if (list == null) {
      return subList;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i][column] === value) {
        subList.push(list[i]);
      }
    }
    return subList;
  }

  /**
   * Get an object in a list by value of one field, like id.
   */
  public static getObjectByFieldValue(obj: any[], fieldname: string, fieldvalue: any): any {
    let found = false;
    let cp = 0;
    while (cp < obj.length && !found) {
      if (obj[cp][fieldname] === fieldvalue) {
        found = true;
      } else {
        cp++;
      }
    }

    if (found) {
      return obj[cp];
    }
    return -1;
  }

  /**
   * Deprecated: Format number
   */
  public static separatorThousand(val: string | number): string {
    val = this.cleanSpace(`${val}`);
    const value = this.copy(val);
    let result: string;
    let i = -3;
    let j = 0;
    let end = false;
    let cp = 0;
    result = '';
    while (!end) {
      if (j < value.length) {
        i += 3;
        j += 3;
        result = ' ' + value.substring(value.length - j, value.length - i) + result;
      } else {
        i += 3;
        result = ' ' + value.substring(0, value.length - i) + result;
        end = true;

      }
      cp++;
    }
    return result;
  }

  /**
   * Return the sum of field of an object.
   */
  public static objectSumField(objs: any[], fieldName: string): number {
    let sum: number;
    sum = 0;
    if (objs && objs !== null && objs !== undefined) {
      objs.map((obj, index) => {
        if (
          this.typeOf(+this.cleanSpace(`${obj[fieldName]}`)) === 'number' &&
          obj[fieldName] !== null &&
          obj[fieldName] !== undefined
        ) {
          sum += +this.cleanSpace(`${obj[fieldName]}`);
        }
      });
    }
    return sum;
  }

  /**
   * Get offset of an object in a FormArray by fieldName
   */
  public static getObjectOffsetInArrayByField(arr: any[], obj: any, fieldName: string): number {
    let found = false;
    let cp = 0;
    while (cp < arr.length && !found) {
      if (arr[cp].value[fieldName] === obj[fieldName]) {
        found = true;
      } else {
        cp++;
      }
    }

    if (found) {
      return cp;
    } else {
      return -1;
    }
  }

  public static getObjectOffsetInArray(arr: any[], obj: any): number {
    let found = false;
    let cp = 0;
    while (cp < arr.length && !found) {
      if (arr[cp] === obj) {
        found = true;
      } else {
        cp++;
      }
    }

    if (found) {
      return cp;
    } else {
      return -1;
    }
  }


  /**
   * Determine le type des objets et variables en JS
   */
  public static jsType(obj: any): string {
    if (obj === null) {
      return 'null';
    }
    if (obj === undefined) {
      return 'undefined';
    }
    if (typeof obj === 'string') {
      return 'string';
    }
    if (obj.length >= 0) {
      return 'array';
    }
    return typeof obj;
  }

  /**
   * Duplique une variable. Cette fonction est utilisée pour éviter l'affectation par referencement d'addresse mémoire.
   */
  public static copy<O>(obj: O): O {
    if (this.jsType(obj) === 'array') {
      return Object.assign([], obj);
    }
    if (this.jsType(obj) === 'object') {
      return Object.assign({}, obj);
    }
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Efface les espaces contenus dans une chaine de caractères
   */
  public static cleanSpace(value: string): string {
    return `${value}`.replace(/\s/g, '');
  }

  /**
   * Teste si un objet est nul ou indéfini
   */
  public static isUndefinedOrNull(value: any): boolean {
    return value === null || value === undefined;
  }

  /**
   * teste si une chaine de caractère est vide, nulle ou indéfinie
   */
  public static stringIsUndefinedOrNull(value: string): boolean {
    return value === null || value === undefined || value === '';
  }

  /**
   * Séparateur de milliers.
   */
  public static thousandSeparator(value: string | number, decimalPre: number = 2,
                                  mode: ThousandSeparatorMode = ThousandSeparatorMode.DEFAULT): string {
    const algo = (_strNbr: string) => {
      const nbrCharsDiv = 3;
      const positions = this.strNbrXChars(_strNbr, nbrCharsDiv);
      let _result = '';
      for (let position = 1; position <= positions; position++) {
        _result = this.strXCharsFromBackAt(_strNbr, nbrCharsDiv, position) + _result;
        if (position < positions) {
          _result = ' ' + _result;
        }
      }
      return _result;
    };

    if (this.stringIsUndefinedOrNull(`${value}`) ||
      +value === 0) {
      switch (mode) {
        case ThousandSeparatorMode.DECIMAL_MANDATORY:
          return `0.0`;
          break;
        case ThousandSeparatorMode.DECIMAL_OPTIONAL:
          return `0`;
          break;
        default:
          return `0`;
      }
    }

    value = this.cleanSpace(`${value}`);
    const valueCopy = this.roundDecimalNumber(+this.copy(value), decimalPre) + '';

    if (mode === ThousandSeparatorMode.DEFAULT) {
      return algo(`${Math.round(+valueCopy)}`);
    }

    const entierPart = valueCopy.split('.')[0];
    const decimalPart = valueCopy.split('.')[1];
    const entierPartFormated = algo(entierPart);

    if (this.stringIsUndefinedOrNull(decimalPart)) {
      if (mode === ThousandSeparatorMode.DECIMAL_OPTIONAL) {
        return entierPartFormated;
      }
      if (mode === ThousandSeparatorMode.DECIMAL_MANDATORY) {
        return entierPartFormated + '.0';
      }
    }

    return `${entierPartFormated}.${decimalPart}`;
  }

  /**
   * Arrondi un nombre à n chiffres après la virgule.
   */
  public static roundDecimalNumber(value: number, decimalPre: number = 1) {
    let multiplier = 1;
    for (let i = 0; i < decimalPre; i++) {
      multiplier = multiplier * 10;
    }
    // console.log(value + ' ' + decimalPre + ' ' + multiplier);
    return Math.round(value * multiplier) / multiplier;
  }

  /**
   * Recupère les X caractères depuis la fin du fichier en commençant par un offset.
   */
  public static strXCharsFromBackAt(value: string, charLength: number, position: number) {
    if (value.length - position * charLength < 0) {
      return value.substr(0, charLength + value.length - position * charLength);
    }
    return value.substr(value.length - position * charLength, charLength);
  }
  public static strNbrXChars(value: string, charLength: number) {
    return Math.round(value.length / charLength);
  }

  /**
   * Supprime un item ou une liste d'items dans un tableau
   */
  public static deleteFromArray (array: any[], item: any) {
    if (this.isUndefinedOrNull(array)) {
      return -1;
    }
    if (this.isUndefinedOrNull(item)) {
      return array;
    }

    let arr = this.copy(array);
    if (this.jsType(item) === 'array') {
      item.map((itm: any) => {
        if (array.find(v => v === itm)) {
          arr = arr.slice(0, arr.findIndex(v => v === itm)).concat(
            arr.slice(arr.findIndex(v => v === itm) + 1)
          );
        }
      });
      return arr;
    }
    if (!array.find(v => v === item)) {
      return arr;
    }
    return arr.slice(0, arr.findIndex(v => v === item)).concat(
      arr.slice(arr.findIndex(v => v === item) + 1)
    );
  }

  /**
   * @Deprecated: Use it from ClvFilesUtils
   */
  public static csvToJson(csv: string) {
    return ClvFilesUtils.csvToJson(csv);
  }
}
