'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Visualization() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const toggle = () => setAnimated((v) => !v);
    el.addEventListener('click', toggle);
    return () => el.removeEventListener('click', toggle);
  }, []);

  return (
    <div className={animated ? 'visual animate card' : 'visual card'} ref={ref} aria-label="Conceptual visualization of a wormhole throat between a black hole and a white hole.">
      <div className="glow" />
      <div className="tube" />
      <div className="well" />
    </div>
  );
}
