import { IEpisode } from "../types";

export function getSelectedEpisodeOrSearchedEpisodes(
  episodeID: number | null,
  filteredEpisodes: IEpisode[]
): IEpisode[] {
  if (episodeID === null) {
    return filteredEpisodes;
  } else {
    const selectedEpisode: undefined | IEpisode = filteredEpisodes.find(
      (episode) => episode.id === episodeID
    );
    const selectedEpisodeArr: IEpisode[] = [];
    if (selectedEpisode !== undefined) {
      selectedEpisodeArr.push(selectedEpisode);
    }
    return selectedEpisodeArr;
  }
}
