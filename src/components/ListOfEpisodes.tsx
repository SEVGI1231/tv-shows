import React, { useState, useEffect } from "react";
import { EpisodeCard } from "./EpisodeCard";
import { Footer } from "./Footer";
import { searchBoxFunc } from "../utils/searchBoxFunc";
import { IEpisode } from "../types";
import shows from "../shows.json";
import { SelectShow } from "./SelectShow";
import { SelectEpisode } from "./SelectEpisode";
import { getSelectedEpisodeOrSearchedEpisodes } from "../utils/getSelectedEpisodeOrSearchedEpisodes";

export function ListOfEpisodes(): JSX.Element {
  const [showID, setShowID] = useState<number>(shows[0].id);

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

  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchedEpisodes = searchBoxFunc(searchTerm, episodes);

  const [episodeID, setEpisodeID] = useState<number | null>(null);

  const displayedEpisodesData = getSelectedEpisodeOrSearchedEpisodes(
    episodeID,
    searchedEpisodes
  );

  return (
    <>
      <section className="search-section">
        <SelectShow setShowID={setShowID} showID={showID} shows={shows} />

        <SelectEpisode
          setEpisodeID={setEpisodeID}
          episodeID={episodeID}
          searchedEpisodes={searchedEpisodes}
          episodes={episodes}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search here..."
        ></input>
        <span>
          Displaying {searchedEpisodes.length} out of {episodes.length}
        </span>
      </section>

      <section className="episode-cards">
        <div className="flex-box">{displayedEpisodesData.map(EpisodeCard)}</div>
      </section>
      <Footer />
    </>
  );
}
