import { useState } from "react";
import "./App.css";
import { ListOfEpisodes } from "./components/ListOfEpisodes";
import { ListOfShows } from "./components/ListOfShows";
import shows from "./shows.json";
import { SelectShow } from "./components/SelectShow";
import { Footer } from "./components/Footer";

export default function App(): JSX.Element {
  const [showID, setShowID] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      
        <SelectShow setShowID={setShowID} showID={showID} shows={shows} />
      
      {showID !== null && (
        <ListOfEpisodes
          iSearchTerm={{ searchTerm, setSearchTerm }}
          showID={showID}
          setShowID={setShowID}
        />
      )}

      {showID === null && (
        <ListOfShows
          iSearchTerm={{ searchTerm, setSearchTerm }}
          shows={shows}
        />
      )}
      <Footer />
    </>
  );
}
