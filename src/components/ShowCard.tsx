import { IShow } from "../types";
import { pTagRemoval } from "../utils/pTagRemoval";

export function ShowCard(props: IShow): JSX.Element {
  return (
    <div key={props.id}>
      <h2>{props.name}</h2>
      <div>
        {props.image !== null && (
          <img src={props.image.medium} alt="snapshot of a show" />
        )}
        {props.summary !== null && <p>{pTagRemoval(props.summary)}</p>}
      </div>
      <div>
        <ul>
          {props.rating.average !== null && (
            <li>Rated: {props.rating.average}</li>
          )}
          <li>Genres: {props.genres}</li>
          <li>Status: {props.status}</li>
          <li>Run: {props.runtime}</li>
        </ul>
      </div>
    </div>
  );
}
