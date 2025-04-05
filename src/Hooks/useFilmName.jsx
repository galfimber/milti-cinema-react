import { useState } from "react";

export function useFilmName() {
  const [filmName, setFilmName] = useState("");
  return { filmName, setFilmName };
}
