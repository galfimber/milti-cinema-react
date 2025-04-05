import { useState } from "react";

export function useModal() {
  const [isActive, setIsActive] = useState(null);
  return { isActive, setIsActive };
}
