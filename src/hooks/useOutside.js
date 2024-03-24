import { useEffect, useRef } from "react";

function useOutside( close, listenCapturing=true ) {

  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return () => document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close]
  );

  return ref;
}

export default useOutside;
