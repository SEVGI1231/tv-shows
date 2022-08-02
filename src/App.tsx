import { useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
import episodes from "./episodes.json";
import { Footer } from "./Footer";
import "./App.css";
import { searchBoxFunc } from "./utils/searchBoxFunc";
import { EpisodeSelector } from "./EpisodeSelector";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);
function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredEpisodes = searchBoxFunc(searchTerm, episodes);

  return (
    <>
      <EpisodeSelector />
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
