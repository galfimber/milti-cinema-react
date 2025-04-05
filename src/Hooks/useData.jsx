import { useState } from "react";

export function useData() {
  const [data, setData] = useState([]);
  return { data, setData };
}
