import { useLayoutEffect, useState} from "react";

export default function useMatchMedia(mediaQuery){
    const [matches, setMatches] = useState(true)

    useLayoutEffect(() => {
        const media = window.matchMedia(mediaQuery)
        
        function mediaMatchListener() {
            setMatches(media.matches);
          }
      
          mediaMatchListener();

          window.addEventListener("resize", mediaMatchListener);

          return () => window.removeEventListener("resize", mediaMatchListener);

    }, [mediaQuery])

    return matches
}