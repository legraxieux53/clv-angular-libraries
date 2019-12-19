# ClvTsUtils 

Angular application utilities.
# Summary
[ClvTsUtilsCommonsJs](#clvtsutilscommonsjs)
 - [enumarableFromListEqual](#enumarablefromlistequal)
 - [getObjectByFieldValue](#getobjectbyfieldvalue)
 - [objectSumField](#objectsumfield)
 - [getObjectOffsetInArrayByField](#getobjectoffsetinarraybyfield)
 - [getObjectOffsetInArray](#getobjectoffsetinarray)
 - [jsType](#jstype)
 - [copy](#copy)
 - [cleanSpace](#cleanspace)
 - [isUndefinedOrNull](#isundefinedornull)
 - [stringIsUndefinedOrNull](#stringisundefinedornull)
 - [thousandSeparator](#thousandseparator)
 - [roundDecimalNumber](#rounddecimalnumber)
 - [strXCharsFromBackAt](#strxcharsfrombackat)
 - [deleteFromArray](#deletefromarray)
 - [csvToJson](#csvtojson)

[ClvStringsUtils](#clvstringsutils)

 - [insertAboveAnchor](#insertaboveanchor)
 - [insertBelowAnchor](#insertbelowanchor)

[ClvFilesUtils](#clvfilesutils)

 - [fileToString](#filetostring)
 - [serializeFile](#serializefile)
 - [buildDownloadFileUrl](#builddownloadfileurl)
 - [csvToJson](#csvtojson)
 - [xlsxToJson](#xlsxtojson)
 
# ClvTsUtilsCommonsJs
## enumarableFromListEqual

    static enumarableFromListEqual(list: any[], column: string, value: any): any[]
Returns a sublist of elements based on the value of a field.

## getObjectByFieldValue

    static getObjectByFieldValue(obj: any[], fieldname: string, fieldvalue: any): any
Returns an object by the value of one of its fields

## objectSumField

    static objectSumField(objs: any[], fieldName: string): number
Sum the values of a field in a list of objects

## getObjectOffsetInArrayByField

    static getObjectOffsetInArrayByField(arr: any[], obj: any, fieldName: string): number
Returns the offset of an object in a list by comparing the value of one of its fields

## getObjectOffsetInArray

    static getObjectOffsetInArray(arr: any[], obj: any): number
Retrieves the offset of the first occurrence of an element in an array or returns -1 if no result matches.

## jsType

    static jsType(obj: any): string

Determine the exact type of a variable

## copy

    static copy<O>(obj: O): O
Duplicates a variable

## cleanSpace

    static cleanSpace(value: string): string
Deletes the spaces of a string

## isUndefinedOrNull

    static isUndefinedOrNull(value: any): boolean
Check that an object is not defined

## stringIsUndefinedOrNull

    static stringIsUndefinedOrNull(value: string): boolean

Check that a string is undefined

## thousandSeparator

    static thousandSeparator(value: string | number, decimalPre: number = 2,  mode: ThousandSeparatorMode = ThousandSeparatorMode.DEFAULT): string
Formats a number by thousands separators.
Mode can be DEFAULT, DECIMAL_MANDATORY or DECIMAL_OPTIONAL

## roundDecimalNumber

    static roundDecimalNumber(value: number, decimalPre: number = 1)
Rounds a number

## strXCharsFromBackAt

`static strXCharsFromBackAt(value: string, charLength: number, position: number)`

retrieves x characters from the end of a string

## deleteFromArray

    static deleteFromArray (array: any[], item: any)
Deletes an item or list of items from a array

Convert from csv to json format

# ClvStringsUtils

## insertAboveAnchor

    static insertAboveAnchor(str: string, toAdd: string, anchor: string): string
Insert a string inside another over an anchor

## insertBelowAnchor

    static insertBelowAnchor(str: string, toAdd: string, anchor: string): string
Insert a string inside another below an anchor

# ClvFilesUtils

## fileToString

    static fileToString(file: File): Observable<string|ArrayBuffer>
Convert a file to a string

## serializeFile

    static serializeFile(file: File): Observable<ClvFileModel>
Serialize a file for better use

## buildDownloadFileUrl

    static buildDownloadFileUrl(sanitizer: DomSanitizer, file: ClvFileModel): SafeResourceUrl

build the URL of a file to download it.
*In ts*

    const fileUrl = buildDownloadFileUrl(sanitizer, file);

*In Html*

    <a [href]="fileUrl"  download="file.name">DownloadFile</a>

# csvToJson
`static csvToJson(csv: string)`
Convert from csv to json format

# xlsxToJson
``xlsxToJson(fileContent: string)``
Convert the contents of an excel file to json format.
