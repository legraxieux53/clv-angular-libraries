// @dynamic
export class ClvTableParamsModel {
  static bodyClass = '';
  static rowsClass = '';
  static tableClass = 'table-class mat-elevation-3z';
  static searchZoneClass = 'search-zone-class';
  static selectSingleClass = 'select-single-class';
  static footerClass = 'footer-class';
  static headerClass = 'header-class';
  static trPairClass = 'tr-pair-class';
  static noDataZoneClass = 'no-data-zone-class';
  static trImpairClass = 'tr-impair-class';
  static placeholderSearchPrefixLabel = 'Rechercher par';
  static noDataLabel = 'Aucune donnée disponible pour le moment';
  private _columns: ClvTableColumnField[];
  private _bodyClass: string;
  private _rowsClass: string;
  private _tableClass: string;
  private _placeholderSearchPrefixLabel: string;
  private _datas: any[];
  private _searchZoneClass: string;
  private _noDataLabel: string;
  private _footerClass: string;
  private _headerClass: string;
  private _trPairClass: string;
  private _details: ClvDetailParams;
  private _trImpairClass: string;
  private _noDataZoneClass: string;
  private _selectSingleClass: string;
  private _canShowMultiSearch: boolean;
  private _canShowSingleSearch: boolean;
  private _pagination: ClvTablePagination;
  private _firstColumnCanSingleSearch: ClvTableColumnField;

  constructor() {
    this.pagination = new ClvTablePagination();
    this.details = new ClvDetailParams();
    this._columns = [];
    this._headerClass = ClvTableParamsModel.headerClass;
    this._bodyClass = ClvTableParamsModel.bodyClass;
    this._trPairClass = ClvTableParamsModel.trPairClass;
    this._trImpairClass = ClvTableParamsModel.trImpairClass;
    this._rowsClass = ClvTableParamsModel.rowsClass;
    this._footerClass = ClvTableParamsModel.footerClass;
    this._tableClass = ClvTableParamsModel.tableClass;
    this._placeholderSearchPrefixLabel = ClvTableParamsModel.placeholderSearchPrefixLabel;
    this._datas = undefined;
    this._searchZoneClass = ClvTableParamsModel.searchZoneClass;
    this._noDataZoneClass = ClvTableParamsModel.noDataZoneClass;
    this._selectSingleClass = ClvTableParamsModel.selectSingleClass;
    this._noDataLabel = ClvTableParamsModel.noDataLabel;
  }

  get details(): ClvDetailParams {
    return this._details;
  }

  set details(value: ClvDetailParams) {
    this._details = value;
  }

  get pagination(): ClvTablePagination {
    return this._pagination;
  }

  set pagination(value: ClvTablePagination) {
    this._pagination = value;
  }

  public getTrClass(index: number): string {
    if (index % 2 === 0) {
      return this.trPairClass;
    } else {
      return this.trImpairClass;
    }
  }

  public getColumn(name: string): ClvTableColumnField {
    return this._columns.find((value, index) => {
      return value.name === name;
    });
  }

  get canShowMultiSearch(): boolean {
    this._canShowMultiSearch = false;
    let cp = 0;
    while (cp < this.columns.length && !this._canShowMultiSearch) {
      if (this.columns[cp].canSearch) {
        this._canShowMultiSearch = true;
      }
      cp++;
    }
    return this._canShowMultiSearch;
  }

  get canShowSingleSearch(): boolean {
    this._canShowSingleSearch = false;
    let cp = 0;
    while (cp < this.columns.length && !this._canShowSingleSearch) {
      if (this.columns[cp].canSingleSearch) {
        this._canShowSingleSearch = true;
      }
      cp++;
    }
    return this._canShowSingleSearch;
  }

  get firstColumnCanSingleSearch(): ClvTableColumnField {
    this._firstColumnCanSingleSearch = this.columns.find((column: ClvTableColumnField, index) => {
      return column.canSingleSearch;
    });
    return this._firstColumnCanSingleSearch;
  }

  get columns(): ClvTableColumnField[] {
    return this._columns;
  }

  set columns(value: ClvTableColumnField[]) {
    this._columns = value;
  }
  get footerClass(): string {
    return this._footerClass;
  }

  set footerClass(value: string) {
    this._footerClass = value;
  }
  get headerClass(): string {
    return this._headerClass;
  }

  set headerClass(value: string) {
    this._headerClass = value;
  }

  get trPairClass(): string {
    return this._trPairClass;
  }

  set trPairClass(value: string) {
    this._trPairClass = value;
  }

  get trImpairClass(): string {
    return this._trImpairClass;
  }

  set trImpairClass(value: string) {
    this._trImpairClass = value;
  }

  get bodyClass(): string {
    return this._bodyClass;
  }

  set bodyClass(value: string) {
    this._bodyClass = value;
  }

  get rowsClass(): string {
    return this._rowsClass;
  }

  set rowsClass(value: string) {
    this._rowsClass = value;
  }

  get tableClass(): string {
    return this._tableClass;
  }

  set tableClass(value: string) {
    this._tableClass = value;
  }

  get placeholderSearchPrefixLabel(): string {
    return this._placeholderSearchPrefixLabel;
  }

  set placeholderSearchPrefixLabel(value: string) {
    this._placeholderSearchPrefixLabel = value;
  }

  get datas(): any[] {
    return this._datas;
  }

  set datas(value: any[]) {
    this._datas = value;
  }

  get searchZoneClass(): string {
    return this._searchZoneClass;
  }

  set searchZoneClass(value: string) {
    this._searchZoneClass = value;
  }

  get noDataLabel(): string {
    return this._noDataLabel;
  }

  set noDataLabel(value: string) {
    this._noDataLabel = value;
  }

  get noDataZoneClass(): string {
    return this._noDataZoneClass;
  }

  set noDataZoneClass(value: string) {
    this._noDataZoneClass = value;
  }

  get selectSingleClass(): string {
    return this._selectSingleClass;
  }

  set selectSingleClass(value: string) {
    this._selectSingleClass = value;
  }
}

export class ClvTableColumnField {
  private _name: string;
  private _title: string;
  private _useForeign: boolean;
  private _foreignName: string;
  private _size: string;
  private _search: any;
  private _canSearch: boolean;
  private _canSingleSearch: boolean;

  constructor(name: string = null, title: string = '', useForeign: boolean = false,
              foreignName: string = null, size: string = 'inherit',
              search: any = '', canSearch: boolean = false, canSingleSearch: boolean = false) {
    this._name = name;
    this._title = title;
    this._useForeign = useForeign;
    this._foreignName = foreignName;
    this._size = size;
    this._search = search;
    this._canSearch = canSearch;
    this._canSingleSearch = canSingleSearch;
  }

  public setCanSingleSearch(canSingleSearch: boolean): this {
    this._canSingleSearch = canSingleSearch;
    return this;
  }

  get useForeign(): boolean {
    return this._useForeign;
  }

  set useForeign(value: boolean) {
    this._useForeign = value;
  }

  get foreignName(): string {
    return this._foreignName;
  }

  set foreignName(value: string) {
    this._foreignName = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get search(): any {
    return this._search;
  }

  set search(value: any) {
    this._search = value;
  }

  get canSearch(): boolean {
    return this._canSearch;
  }

  set canSearch(value: boolean) {
    this._canSearch = value;
  }

  get canSingleSearch(): boolean {
    return this._canSingleSearch;
  }

  set canSingleSearch(value: boolean) {
    this._canSingleSearch = value;
  }
}

// @dynamic
export class ClvTablePagination {
  static pageSize = 10;
  static pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  static itemsPerPageLabel = 'Elements par Page';
  static previousPageLabel = 'Page précédante';
  static nextPageLabel = 'Page suivante';
  static firstPageLabel = 'Première page';
  static lastPageLabel = 'Dernière page';
  static lengths = 10;
  static hide = false;
  private _pageSize: number;
  private _pageSizeOptions: number[];
  private _itemsPerPageLabel: string;
  private _previousPageLabel: string;
  private _nextPageLabel: string;
  private _firstPageLabel: string;
  private _lastPageLabel: string;
  private _length: number;
  private _hide: boolean;

  constructor(pageSize: number = ClvTablePagination.pageSize,
              pageSizeOptions: number[] = ClvTablePagination.pageSizeOptions,
              itemsPerPageLabel: string = ClvTablePagination.itemsPerPageLabel,
              previousPageLabel: string = ClvTablePagination.previousPageLabel,
              nextPageLabel: string = ClvTablePagination.nextPageLabel,
              firstPageLabel: string = ClvTablePagination.firstPageLabel,
              lastPageLabel: string = ClvTablePagination.lastPageLabel,
              length: number = ClvTablePagination.lengths,
              hide: boolean = ClvTablePagination.hide) {
    this._pageSize = pageSize;
    this._pageSizeOptions = pageSizeOptions;
    this._itemsPerPageLabel = itemsPerPageLabel;
    this._previousPageLabel = previousPageLabel;
    this._nextPageLabel = nextPageLabel;
    this._firstPageLabel = firstPageLabel;
    this._lastPageLabel = lastPageLabel;
    this._length = length;
    this._hide = hide;
  }

  get hide(): boolean {
    return this._hide;
  }

  set hide(value: boolean) {
    this._hide = value;
  }

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get itemsPerPageLabel(): string {
    return this._itemsPerPageLabel;
  }

  set itemsPerPageLabel(value: string) {
    this._itemsPerPageLabel = value;
  }

  get nextPageLabel(): string {
    return this._nextPageLabel;
  }

  set nextPageLabel(value: string) {
    this._nextPageLabel = value;
  }

  get previousPageLabel(): string {
    return this._previousPageLabel;
  }

  set previousPageLabel(value: string) {
    this._previousPageLabel = value;
  }

  get firstPageLabel(): string {
    return this._firstPageLabel;
  }

  set firstPageLabel(value: string) {
    this._firstPageLabel = value;
  }

  get lastPageLabel(): string {
    return this._lastPageLabel;
  }

  set lastPageLabel(value: string) {
    this._lastPageLabel = value;
  }

  get pageSizeOptions(): number[] {
    return this._pageSizeOptions;
  }

  set pageSizeOptions(value: number[]) {
    this._pageSizeOptions = value;
  }
}

// @dynamic
export class ClvDetailParams {
  static detailClass = 'detail-class';
  static detailButtonClass = 'button-class';
  static detailButtonMinusClass = 'button-minus-class';
  private _detail: boolean;
  private _detailClass: string;
  private _detailButtonClass: string;
  private _detailButtonMinusClass: string;

  constructor(detail: boolean = false,
              detailClass: string = ClvDetailParams.detailClass,
              detailButtonClass: string = ClvDetailParams.detailButtonClass,
              detailButtonMinusClass: string = ClvDetailParams.detailButtonMinusClass) {
    this._detail = detail;
    this._detailClass = detailClass;
    this._detailButtonClass = detailButtonClass;
    this._detailButtonMinusClass = detailButtonMinusClass;
  }

  get detail(): boolean {
    return this._detail;
  }

  set detail(value: boolean) {
    this._detail = value;
  }

  get detailClass(): string {
    return this._detailClass;
  }

  set detailClass(value: string) {
    this._detailClass = value;
  }

  get detailButtonClass(): string {
    return this._detailButtonClass;
  }

  set detailButtonClass(value: string) {
    this._detailButtonClass = value;
  }

  get detailButtonMinusClass(): string {
    return this._detailButtonMinusClass;
  }

  set detailButtonMinusClass(value: string) {
    this._detailButtonMinusClass = value;
  }
}
