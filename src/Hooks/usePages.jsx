import { useState } from "react";

export function usePages() {
  const [pages, setPages] = useState({
    actual: 0,
    all: 0,
  });
  return { pages, setPages };
}
