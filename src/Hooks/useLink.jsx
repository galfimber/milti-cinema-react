import { useState } from "react";

export function useLink() {
  const [link, setLink] = useState("");
  return { link, setLink };
}
