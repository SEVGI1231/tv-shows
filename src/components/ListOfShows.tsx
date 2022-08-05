import shows from "../shows.json";
import { ShowCard } from "./ShowCard";

export function ListOfShows(): JSX.Element {
  console.log("rendering list of shows");
  return <>{shows.map(ShowCard)}</>;
}
