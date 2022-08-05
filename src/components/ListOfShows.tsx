import { ISearchTerm, ISelectShows } from "../types";
import { showSearchBoxFunc } from "../utils/showSearchBoxFunc";
import { SearchBox } from "./SearchBox";
import { ShowCard } from "./ShowCard";



interface IListOfShows {
    iSelectShows: ISelectShows
    iSearchTerm : ISearchTerm
  }


export function ListOfShows({iSearchTerm :{searchTerm, setSearchTerm}, iSelectShows: {showID, setShowID, shows}}:IListOfShows): JSX.Element {  
    const searchedShows = showSearchBoxFunc(searchTerm, shows)
    return (
    <>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {shows.map(ShowCard)}
    </>
    )
}
