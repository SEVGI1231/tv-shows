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
    if (e.target.value=== "null"){
      setShowID(null)
    }
    else{
      setShowID(parseInt(e.target.value));
    }
  }
  return (
    <section className="show-selection">
        <select name="show" id="show" onChange={handleOnChangeShows}>
          <option value="null">Select show</option>
          {alphabeticShowsList.map((show, index) => {
            return (
              <option key={index} value={show.id}>
                {show.name}
              </option>
            );
          })}
        </select>
      
    </section>
  );
}
