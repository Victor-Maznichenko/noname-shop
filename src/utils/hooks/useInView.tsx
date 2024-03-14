import { useEffect, useState } from "react";

const useInView = () => {
  const [element, setElement] = useState<null | HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const callback: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      setInView(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return { inView, setElement };
};

export default useInView;
