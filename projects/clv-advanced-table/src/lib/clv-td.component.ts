import {Component} from '@angular/core';

@Component({
  selector: 'clv-td',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: table-cell;
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
    .select-single-class {
      padding: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      background: white;
    }

    .tr-pair-class {
      background: white;
      width: auto;
      min-width: auto;
      font-size: 20px;
    }
    .tr-impair-class {
      color: #000000 !important;
      background: #85baf5 !important;
      width: auto;
      min-width: auto;
      font-size: 20px;
    }
    .table-class {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
      border-collapse: collapse;
    }

    .header-class {
      color: #ffffff !important;
      background: #0054ee !important
    }

    .footer-class {
      color: #ffffff !important;
      background: #2685ee !important
    }

    .button-class {
      color: #ffffff !important;
      background: #145523 !important;
    }

    .button-minus-class {
      color: #ffffff !important;
      background: #921925 !important;
    }

    .search-zone-class {
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    .detail-class {
      color: #000000 !important;
      background: #cccccc !important;
    }

    .no-data-zone-class {
      background: white;
    }
  `]
})
export class ClvTdComponent {

}
