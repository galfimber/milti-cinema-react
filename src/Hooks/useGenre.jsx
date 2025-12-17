import { useState } from "react";

export function useGenre() {
  const [genre, setGenre] = useState("");
  return { genre, setGenre };
}
