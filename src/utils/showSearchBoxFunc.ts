import { IShow } from "../types";

export function showSearchBoxFunc(searchTerm: string, data: IShow[]): IShow[] {
  function callBackFunc(oneSetOfData: IShow): boolean {
    if (oneSetOfData.summary !== null) {
      return (
        oneSetOfData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        oneSetOfData.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false;
  }
  return data.filter(callBackFunc);
}
