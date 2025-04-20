import { useState } from "react";

export function useCollections() {
  const [collections, setCollections] = useState([]);
  return { collections, setCollections };
}
