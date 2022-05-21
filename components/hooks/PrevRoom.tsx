import { useEffect, useRef } from "react";

function usePrevious(value: string) {
  const ref = useRef<string>("");
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export default usePrevious;
