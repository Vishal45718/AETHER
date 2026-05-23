"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,         // Very slow, cinematic
        duration: 2.0,      // Long duration for atmospheric pacing
        smoothWheel: true,
        wheelMultiplier: 0.7, // Slower wheel response
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
