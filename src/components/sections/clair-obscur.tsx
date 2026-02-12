'use client'

import { Box, Container, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { glassStyles } from "@/app/theme";
import { useEffect, useState } from "react";

export const ClairObscur = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        maxW="5xl"
        px={6}
        py={3}
        {...glassStyles.heavy}
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
            onClick={() => isDark && setColorMode('light')}
            color= "fg.muted"
            fontWeight= "medium"
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
            onClick={() => isLight && setColorMode('dark')}
            color= "fg.muted"
            fontWeight= "medium"
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