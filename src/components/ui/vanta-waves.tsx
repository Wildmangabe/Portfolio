'use client'

import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

interface VantaWavesProps {
  onProgress?: (progress: number) => void;
}

export const VantaWaves = ({ onProgress }: VantaWavesProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      try {
        // Smooth progress increments with delays
        onProgress?.(10);
        await new Promise(resolve => setTimeout(resolve, 100));
        
        onProgress?.(25);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check for THREE
        if (!(window as any).THREE) {
          await new Promise<void>((resolve) => {
            const checkThree = setInterval(() => {
              if ((window as any).THREE) {
                clearInterval(checkThree);
                resolve();
              }
            }, 100);
          });
        }
        onProgress?.(45);
        await new Promise(resolve => setTimeout(resolve, 100));

        onProgress?.(60);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check for VANTA
        if (!(window as any).VANTA) {
          await new Promise<void>((resolve) => {
            const checkVanta = setInterval(() => {
              if ((window as any).VANTA) {
                clearInterval(checkVanta);
                resolve();
              }
            }, 100);
          });
        }
        onProgress?.(75);
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize Vanta effect
        const VANTA = (window as any).VANTA;
        if (isMounted && VANTA?.WAVES && vantaRef.current) {
          vantaEffect.current = VANTA.WAVES({
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

          onProgress?.(90);
          await new Promise(resolve => setTimeout(resolve, 200));

          if (isMounted) {
            onProgress?.(100);
          }
        }
      } catch (error) {
        console.error('Error initializing Vanta:', error);
        onProgress?.(100);
      }
    };

    initVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [onProgress]);

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