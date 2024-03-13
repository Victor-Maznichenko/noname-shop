import { useEffect, useRef, useState } from "react";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const callback: IntersectionObserverCallback = (entries, observer) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setInView(true);
      console.log(entry);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    const currentRef = ref.current;
    console.log("Update");

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref]);

  return { ref, inView };
};

export default useInView;
