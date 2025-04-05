import { useState } from "react";

export function useFilm() {
  const [film, setFilm] = useState({});
  return { film, setFilm };
}
