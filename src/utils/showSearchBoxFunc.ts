import { IShow } from "../types";

export function showSearchBoxFunc(searchTerm: string, data: IShow[]): IShow[] {
  function callBackFunc(oneSetOfData: IShow): boolean {
    if (oneSetOfData.summary === null && oneSetOfData.genres === []) {
      return oneSetOfData.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (oneSetOfData.genres === []) {
      return (
        oneSetOfData.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        oneSetOfData.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (oneSetOfData.summary === null) {
      return (
        oneSetOfData.genres
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        oneSetOfData.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return (
      oneSetOfData.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      oneSetOfData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      oneSetOfData.genres
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }
  return data.filter(callBackFunc);
}
