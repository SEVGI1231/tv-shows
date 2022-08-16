import { IEpisode } from "../types";
import { episodeCode } from "../utils/episodeCode";

interface SelectEpisodeProps {
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
}: SelectEpisodeProps): JSX.Element {
  function handleOnChangeEpisodes(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value==="default"){
      setEpisodeID(null)
    }
    else{
      setEpisodeID(parseInt(e.target.value));
      console.log(e.target.value)
    }
  }
  return (
    <>
        <select name="episode" id="episode" 
        onChange={handleOnChangeEpisodes}>
          <option value="default">Select Episode</option>
          {episodes.map((episode: IEpisode, index) => {
            return (
              <option key={index} value={episode.id}>
                {episodeCode(episode)}-{episode.name}
              </option>
            );
          })}
        </select>
    </>
  );
}
