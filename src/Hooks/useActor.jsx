import { useState } from "react";

export function useActor() {
  const [isActor, setIsActor] = useState(false);
  return { isActor, setIsActor };
}
