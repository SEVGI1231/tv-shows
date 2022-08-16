import { IEpisode } from "../types";

export function episodeCode(episode: IEpisode): string {
  let seasonModified = `${episode.season};`;
  let numberModified = `${episode.number}`;
  if (episode.season < 10) {
    seasonModified = `0${episode.season}`;
  }
  if (episode.number < 10) {
    numberModified = `0${episode.number}`;
  }
  return `S${seasonModified}E${numberModified}`;
}
