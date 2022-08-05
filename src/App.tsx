import { useState } from "react";
import "./App.css";
import { ListOfEpisodes } from "./components/ListOfEpisodes";
import { ListOfShows } from "./components/ListOfShows";
import shows from "./shows.json";
import { SelectShow } from "./components/SelectShow";

export default function App(): JSX.Element {
  const [showID, setShowID] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      {showID !== null && (
        <ListOfEpisodes
          iSearchTerm={{ searchTerm, setSearchTerm }}
          iSelectShows={{ showID, setShowID, shows }}
        />
      )}
      <SelectShow setShowID={setShowID} showID={showID} shows={shows} />

      {showID === null && (
        <ListOfShows
          iSearchTerm={{ searchTerm, setSearchTerm }}
          iSelectShows={{ showID, setShowID, shows }}
        />
      )}
    </>
  );
}
