import { IShow } from "../types";

export function sortShowsAlphabetically(
  show1: IShow,
  show2: IShow
): -1 | 1 | 0 {
  if (show1.name < show2.name) {
    return -1;
  } else if (show1.name > show2.name) {
    return 1;
  }
  return 0;
}
