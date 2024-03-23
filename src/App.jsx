import "./styles.css";

import { Player } from "./ui/player-card";

import data from "./mock-data/ecstatic.json";

export function App() {
  return <Player {...data.Ecstatic[0]} />;
}
