import { useEffect } from "react";

const useClickCount = (count) => {
  useEffect(() => {
    document.title = `Click Counter`;
    count === 1
      ? (document.title = `I am first one.`)
      : (document.title = `Click Counter - ${count}`);
  }, [count]);
};

export default useClickCount;
