import { useState } from "react";

export function usePlayers() {
  const [players, setPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState({});
  return { players, setPlayers, activePlayer, setActivePlayer };
}
