import { useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
import { Footer } from "./Footer";
import "./App.css";
import { searchBoxFunc } from "./utils/searchBoxFunc";
import { episodeCode2 } from "./utils/episodeCode";
import { useEffect } from "react";
import { IEpisode } from "./types";

function App(): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes ");
    const episodes: IEpisode[] = await response.json();
    console.log(episodes);
    setEpisodes(episodes);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchedEpisodes = searchBoxFunc(searchTerm, episodes);

  const [episodeID, setEpisodeID] = useState<number | null>(null);
  function handleOnChangeDD(e: React.ChangeEvent<HTMLSelectElement>) {
    setEpisodeID(parseInt(e.target.value));
  }
  function getSelectedEpisodeOrSearchedEpisodes(
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
  const displayedEpisodesData = getSelectedEpisodeOrSearchedEpisodes(
    episodeID,
    searchedEpisodes
  );
  function handleButtonClick() {
    setEpisodeID(null);
  }
  return (
    <>
      <label htmlFor="episode">
        Select an episode
        <select name="episode" id="episode" onChange={handleOnChangeDD}>
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
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search here..."
      ></input>
      <span>
        Displaying {searchedEpisodes.length} out of {episodes.length}
      </span>
      <section className="episode-cards">
        <div className="flex-box">{displayedEpisodesData.map(EpisodeCard)}</div>
      </section>
      <Footer />
    </>
  );
}

export default App;
