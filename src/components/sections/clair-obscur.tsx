'use client'

import { Box, Container, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { glassDecorations, glassEffects, glassRadius } from "@/app/theme";
import { useEffect, useState, useRef } from "react";

export const QuoteSection = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const audio = new Audio("/audio/gustave-E33.mp3");
    audioRef.current = audio;
    audioRef.current.volume = 0.05;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleFlip = (newMode: 'light' | 'dark') => {
    setColorMode(newMode);
    const hasPlayed = sessionStorage.getItem("expedition_audio_played");
    if (!hasPlayed && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          sessionStorage.setItem("expedition_audio_played", "true");
        })
        .catch((err) => {
          console.warn("Audio playback was prevented by the browser:", err);
        });
    }
  };

  const isDark = mounted && colorMode === 'dark';
  const isLight = mounted && colorMode === 'light';

  return (
    <Box
      as="section"
      id="clair-obscur"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={6}
    >
      <Container
        maxW="xl"
        px={6}
        py={3}
        {...glassEffects.heavy}
        {...glassDecorations.heavy}
        {...glassRadius}
      >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="fg.muted"
          fontStyle="italic"
          fontFamily="fonts.body"
          lineHeight="1.6"
          textAlign="center"
        >
          "For those who come after" —{" "}
          <Text
            as="span"
            cursor={isDark ? "pointer" : "default"}
            onClick={() => isDark && handleFlip('light')}
            color="fg.muted"
            fontWeight="medium"
            transition="all 0.3s ease"
            _hover={isDark ? {
              color: "fg.accent",
              transform: "translateY(-1px)",
            } : {}}
          >
            Clair
          </Text>
          {" "}
          <Text
            as="span"
            cursor={isLight ? "pointer" : "default"}
            onClick={() => isLight && handleFlip('dark')}
            color="fg.muted"
            fontWeight="medium"
            transition="all 0.3s ease"
            _hover={isLight ? {
              color: "fg.accent",
              transform: "translateY(-1px)",
            } : {}}
          >
            Obscur
          </Text>
          : Expedition 33
        </Text>
      </Container>
    </Box>
  );
};