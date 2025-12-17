import { useState } from "react";

export function useFetchMethod() {
  const [fetchMethod, setFetchMethod] = useState("");
  return { fetchMethod, setFetchMethod };
}
