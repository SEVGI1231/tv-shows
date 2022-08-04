export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: null | {
    medium: string;
    original: string;
  };
  summary: null | string;
  _links: { self: { href: string } };
}

export interface IShow {
  name: string;
  id: number;
  summary: string;
  genres: string[];
  status: string;
  image: {
    medium: string;
  };
  rating: {
    average: null | number;
  };
  runtime: null | number;
}
