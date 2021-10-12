import { useEffect } from "react";

function useOverFlow(trigger) {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [trigger]);
}

export default useOverFlow;
