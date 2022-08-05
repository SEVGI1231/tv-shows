import { ISearchTerm } from "../types";

export function SearchBox({
  searchTerm,
  setSearchTerm,
}: ISearchTerm): JSX.Element {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="search here..."
    ></input>
  );
}
