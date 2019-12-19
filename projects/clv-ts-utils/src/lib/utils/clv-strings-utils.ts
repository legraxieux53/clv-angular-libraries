//@dynamic
export class ClvStringsUtils {
  /**
   * insert a string into a string above an anchor
   */
  public static insertAboveAnchor(str: string, toAdd: string, anchor: string): string {
    const indexAncor = str.search(anchor);
    const result = str.slice(0, indexAncor - 1) + toAdd + str.slice(indexAncor);
    return result;
  }

  /**
   * insert into a string below an anchor
   */
  public static insertBelowAnchor(str: string, toAdd: string, anchor: string): string {
    const indexAncor = str.search(anchor) + anchor.length;
    const result = str.slice(0, indexAncor) + toAdd + str.slice(indexAncor);
    return result;
  }
}
