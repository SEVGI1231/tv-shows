import shows from "../shows.json";
import { ShowCard } from "./ShowCard";

export function ListOfShows(): JSX.Element {
  return (
    <>
      <p>Hello</p>
      <div>{shows.map(ShowCard)}</div>
    </>
  );
}
