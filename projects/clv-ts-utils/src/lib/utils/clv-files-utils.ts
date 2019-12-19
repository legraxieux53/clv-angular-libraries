import {Observable} from 'rxjs';
import {ClvFileModel} from './clv-file.model';
import {map} from 'rxjs/operators';
import {ClvTsUtilsCommonsJs} from './clv-ts-utils-commons-js';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import * as XLSX from 'xlsx';

//@dynamic
export class ClvFilesUtils {
  public static fileToString(file: File): Observable<string|ArrayBuffer> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => observer.next(reader.result);
      reader.onerror = error => observer.error(error);
    });
  }

  public static serializeFile(file: File): Observable<ClvFileModel> {
    return this.fileToString(file).pipe(
      map((fileBs4: string) => {
        if (ClvTsUtilsCommonsJs.jsType(fileBs4) !== 'string') {
          throw new Error('File not retrieived');
        }
        const fileModel = new ClvFileModel();
        fileModel.name = file.name;
        fileModel.type = file.type;
        fileModel.size = file.size;
        fileModel.file = file;
        fileModel.extension = '.' + file.name.split('.')[file.name.split('.').length - 1];
        fileModel.lastModified = file.lastModified;
        fileModel.data = fileBs4.split('base64,')[1];
        fileModel.content = atob(fileModel.data);
        fileModel.fullDataUrl = fileBs4;
        const blob = new Blob([atob(fileModel.data)], { type: file.type });
        fileModel.downloadUrl = window.URL.createObjectURL(blob);
        return fileModel;
      })
    );
  }

  public static buildDownloadFileUrl(sanitizer: DomSanitizer, file: ClvFileModel): SafeResourceUrl {
    const blob = new Blob([atob(<string>file.data)], { type: file.type });
    return sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  public static csvToJson(csv: string) {
    const lines = (csv.split('"').join('')).split('\n');

    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {

      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }

    return result;
  }

  public static xlsxToJson(fileContent: string) {
    let workBook = null;
    let jsonData = null;
    workBook = XLSX.read(fileContent, { type: 'binary' });
    jsonData = workBook.SheetNames.reduce((initial, name) => {
      const sheet = workBook.Sheets[name];
      initial[name] = XLSX.utils.sheet_to_json(sheet);
      return initial;
    }, {});
    return jsonData;
  }
}
