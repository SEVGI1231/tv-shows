import { IEpisode} from "../types";

export function episodeSearchBoxFunc(
  searchTerm: string,
  data: IEpisode[] 
): IEpisode [] {
  function callBackFunc(oneSetOfData: IEpisode): boolean {
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
