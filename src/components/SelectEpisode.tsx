import { IEpisode } from "../types";
import { episodeCode2 } from "../utils/episodeCode";

interface SelectEpisode {
  setEpisodeID: React.Dispatch<React.SetStateAction<number | null>>;
  episodeID: number | null;
  searchedEpisodes: IEpisode[];
  episodes: IEpisode[];
}
export function SelectEpisode({
  setEpisodeID,
  episodeID,
  searchedEpisodes,
  episodes,
}: SelectEpisode): JSX.Element {
  function handleOnChangeEpisodes(e: React.ChangeEvent<HTMLSelectElement>) {
    setEpisodeID(parseInt(e.target.value));
  }
  
  
  function handleButtonClick() {
    setEpisodeID(null);
  }
  return (
    <>
      <label htmlFor="episode">
        Select an episode
        <select name="episode" id="episode" onChange={handleOnChangeEpisodes}>
          {episodes.map((episode: IEpisode, index) => {
            return (
              <option key={index} value={episode.id}>
                {episodeCode2(episode)}-{episode.name}
              </option>
            );
          })}
        </select>
      </label>
      <button onClick={handleButtonClick}>Reset Selection</button>
    </>
  );
}
