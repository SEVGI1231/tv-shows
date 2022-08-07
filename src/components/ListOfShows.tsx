import { ISearchTerm, IShow } from "../types";
import { showSearchBoxFunc } from "../utils/showSearchBoxFunc";
import { SearchBox } from "./SearchBox";
import { ShowCard } from "./ShowCard";

interface IListOfShows {
  shows: IShow[];
  iSearchTerm: ISearchTerm;
}

export function ListOfShows({
  iSearchTerm: { searchTerm, setSearchTerm },
  shows,
}: IListOfShows): JSX.Element {
  const searchedShows = showSearchBoxFunc(searchTerm, shows);
  return (
    <>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="listOfShows" >{searchedShows.map(ShowCard)}</section>
    </>
  );
}
