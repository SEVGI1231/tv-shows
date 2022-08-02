//import { useState } from 'react';
import Select, { Options } from "react-select";
import episodes from "./episodes.json";
//import { IEpisode } from './types';
import { episodeCode } from "./utils/episodeCode";

export function EpisodeSelector(): JSX.Element {
  const option = episodes.map((episode, index) => ({
    value: index,
    label: `S${episodeCode(episode.season)}E${episodeCode(episode.number)} - ${
      episode.name
    }`,
  }));
  function handleOnChange() {
    console.log(option);
  }
  return <Select options={option} onChange={handleOnChange} />;
}
