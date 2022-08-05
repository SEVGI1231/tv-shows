import { IShow } from "../types";
import { sortShowsAlphabetically } from "../utils/sortShowsAlphabetically";
import { ISelectShows } from "../types";


export function SelectShow({
  setShowID,
  showID,
  shows,
}: ISelectShows): JSX.Element {
  const alphabeticShowsList: IShow[] = shows.sort(sortShowsAlphabetically);
  function handleOnChangeShows(e: React.ChangeEvent<HTMLSelectElement>) {
    setShowID(parseInt(e.target.value));
  }
  return (
    <>
      <label htmlFor="show">
        Select a show
        <select name="show" id="show" onChange={handleOnChangeShows}>
          {alphabeticShowsList.map((show, index) => {
            return (
              <option key={index} value={show.id}>
                {show.name}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}
