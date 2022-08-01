import { EpisodeCard } from "./EpisodeCard";
import episodes from "./episodes.json";
import { Footer } from "./Footer";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);
function App(): JSX.Element {
  return (
    <>
      <section className="episode-cards">{episodes.map(EpisodeCard)}</section>
      <Footer />
    </>
  );
}

export default App;
