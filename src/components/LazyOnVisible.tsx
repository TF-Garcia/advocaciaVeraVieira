import { ReactNode, useEffect, useRef, useState } from "react";

type LazyOnVisibleProps = {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
};

export default function LazyOnVisible({
  children,
  fallback = null,
  rootMargin = "360px",
}: LazyOnVisibleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const marker = markerRef.current;

    if (!marker || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return <>{children}</>;
  }

  return <div ref={markerRef}>{fallback}</div>;
}
