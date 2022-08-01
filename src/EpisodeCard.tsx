import { IEpisode } from "./types";
import { episodeCode } from "./utils/episodeCode";

export function EpisodeCard(episode: IEpisode): JSX.Element {
  return (
    <div key={episode.id}>
      <h3>
        {episode.name}-S{episodeCode(episode.season)}E
        {episodeCode(episode.number)}
      </h3>
      <img src={episode.image.medium} alt="snapshot of the episode" />
      <p>{episode.summary}</p>
    </div>
  );
}
