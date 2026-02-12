'use client'

import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

interface VantaBackgroundProps {
  onProgress?: (progress: number) => void;
}

export const VantaBackground = ({ onProgress }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { colorMode } = useColorMode();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    let isMounted = true;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      try {
        if (isInitialLoad.current) {
          onProgress?.(10);
          await new Promise(resolve => setTimeout(resolve, 100));
          onProgress?.(25);
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        if (!(window as any).THREE || !(window as any).VANTA) {
          await new Promise<void>((resolve) => {
            const checkLibs = setInterval(() => {
              if ((window as any).THREE && (window as any).VANTA) {
                clearInterval(checkLibs);
                resolve();
              }
            }, 100);
          });
        }

        if (isInitialLoad.current) {
          onProgress?.(45);
          await new Promise(resolve => setTimeout(resolve, 100));
          onProgress?.(60);
          await new Promise(resolve => setTimeout(resolve, 100));
          onProgress?.(75);
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }

        const VANTA = (window as any).VANTA;
        if (isMounted && vantaRef.current) {
          if (colorMode === 'dark' && VANTA?.TOPOLOGY) {
            vantaEffect.current = VANTA.TOPOLOGY({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x00ff51,
              backgroundColor: 0x000000,
            });
          } else if (colorMode === 'light' && VANTA?.WAVES) {
            vantaEffect.current = VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x7e7e7e,
              shininess: 114.00,
              waveHeight: 40.00,
              waveSpeed: 1.15,
              zoom: 0.6,
            });
          }

          if (isInitialLoad.current) {
            onProgress?.(90);
            await new Promise(resolve => setTimeout(resolve, 200));
            if (isMounted) {
              onProgress?.(100);
              isInitialLoad.current = false;
            }
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
  }, [colorMode, onProgress]);

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