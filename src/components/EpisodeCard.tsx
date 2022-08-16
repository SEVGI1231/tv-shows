import { IEpisode } from "../types";
import { episodeCode } from "../utils/episodeCode";
import { pTagRemoval } from "../utils/pTagRemoval";

export function EpisodeCard(episode: IEpisode): JSX.Element {
  return (
    <div className="episode-card" key={episode.id}>
      <h3>
        {episodeCode(episode)}-{episode.name}
      </h3>
      {episode.image !== null && (
        <img src={episode.image.medium} alt="snapshot of the episode" />
      )}
      {episode.summary !== null && <p>{pTagRemoval(episode.summary)}</p>}
    </div>
  );
}
