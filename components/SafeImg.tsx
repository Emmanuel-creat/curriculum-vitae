"use client";

import { useEffect, useRef, useState } from "react";

// Image distante avec repli : gère aussi une erreur survenue avant l'hydratation.
export default function SafeImg({
  src,
  fallback,
  onFail,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; fallback?: string; onFail?: () => void }) {
  const ref = useRef<HTMLImageElement>(null);
  const [current, setCurrent] = useState(src);
  const [hidden, setHidden] = useState(false);

  // nouvelle source (ex. image suivante dans la visionneuse) : on repart de zéro
  useEffect(() => {
    setCurrent(src);
    setHidden(false);
  }, [src]);

  const fail = () => {
    if (fallback && current !== fallback) setCurrent(fallback);
    else {
      setHidden(true);
      onFail?.();
    }
  };

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) fail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  if (hidden) return null;
  return <img ref={ref} src={current} referrerPolicy="no-referrer" onError={fail} {...rest} />;
}
