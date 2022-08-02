import { IEpisode } from "../types";

export function searchBoxFunc(
  searchTerm: string,
  episodeData: IEpisode[]
): IEpisode[] {
  function callBackFunc(oneEpisodeData: IEpisode): boolean {
    return (
      oneEpisodeData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      oneEpisodeData.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return episodeData.filter(callBackFunc);
}
