import { useState } from "react";

export default function useCountStorage(initialValue) {
  const [count, setCount] = useState(initialValue);

  return [count, setCount];
}
