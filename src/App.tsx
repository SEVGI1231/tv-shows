import { useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
//import episodes from "./episodes.json";
import { Footer } from "./Footer";
import "./App.css";
import { searchBoxFunc } from "./utils/searchBoxFunc";
import { episodeCode } from "./utils/episodeCode";
import Select from "react-select";
import { useEffect } from "react";
import { IEpisode } from "./types";

//console.log(`Imported ${episodes.length} episode(s)`);
//console.log(`First episode's name is ${episodes[0].name}`);
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
  const filteredEpisodes = searchBoxFunc(searchTerm, episodes);

  const option = episodes.map((episode) => ({
    value: episode.id,
    label: `S${episodeCode(episode.season)}E${episodeCode(episode.number)} - ${
      episode.name
    }`,
    name: episode.name,
    summary: episode.summary,
    imageSrc: episode.image.medium,
  }));
  /*
function handleOnChange()
  
  find selectedItem in episodes by usind id 
  filteredEpisode= matched episode
  return filteredEpisode
  }
*/

  return (
    <>
      <Select options={option} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search here..."
      ></input>
      <span>
        Displaying {filteredEpisodes.length} out of {episodes.length}
      </span>
      <section className="episode-cards">
        <div className="flex-box">{filteredEpisodes.map(EpisodeCard)}</div>
      </section>
      <Footer />
    </>
  );
}

export default App;
