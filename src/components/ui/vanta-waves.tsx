"use client";

import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

interface VantaWavesProps {
  onReady: () => void;
}

export const VantaWaves = ({ onReady }: VantaWavesProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const VANTA = (window as any).VANTA;

    if (VANTA && vantaRef.current) {
      const effect = VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xe1014,
        shininess: 22.00,
        waveHeight: 30.50,
        zoom: 0.75,
      });

      if (effect) {
        onReady();
      }

      // Cleanup to prevent memory leaks
      return () => {
        if (effect) effect.destroy();
      };
    }
  }, [onReady]);

  return (
    <Box
      ref={vantaRef}
      position="fixed"
      inset={0}
      zIndex={0}
      bg="bg"
    />
  );
};