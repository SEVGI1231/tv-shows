import { useState, useEffect } from "react";
import { EpisodeCard } from "./EpisodeCard";
import { episodeSearchBoxFunc } from "../utils/episodeSearchBoxFunc";
import { IEpisode, ISearchTerm } from "../types";
import { SelectEpisode } from "./SelectEpisode";
import { getSelectedEpisodeOrSearchedEpisodes } from "../utils/getSelectedEpisodeOrSearchedEpisodes";
import { SearchBox } from "./SearchBox";
//import { SearchBox } from "./SearchBox";

interface IListOfEpisodes {
  showID: number;
  setShowID: React.Dispatch<React.SetStateAction<number | null>>;
  iSearchTerm: ISearchTerm;
}
export function ListOfEpisodes({
  showID,
  setShowID,
  iSearchTerm: { searchTerm, setSearchTerm },
}: IListOfEpisodes): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${showID}/episodes`
      );
      const episodes: IEpisode[] = await response.json();

      setEpisodes(episodes);
    };
    fetchData();
  }, [showID]);

  const searchedEpisodes = episodeSearchBoxFunc(searchTerm, episodes);

  const [episodeID, setEpisodeID] = useState<number | null>(null);

  const displayedEpisodesData = getSelectedEpisodeOrSearchedEpisodes(
    episodeID,
    searchedEpisodes
  );

  return (
    <>
      <section className="search-section">
        <SelectEpisode
          setEpisodeID={setEpisodeID}
          episodeID={episodeID}
          searchedEpisodes={searchedEpisodes}
          episodes={episodes}
        />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <span>
          Displaying {searchedEpisodes.length} out of {episodes.length}
        </span>
        <button onClick={() => setShowID(null)}>Return to show list</button>
      </section>

      <section className="episode-cards">
        <div className="flex-box">{displayedEpisodesData.map(EpisodeCard)}</div>
      </section>
    </>
  );
}
