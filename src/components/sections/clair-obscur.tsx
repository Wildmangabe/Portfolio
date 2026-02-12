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

  const isDark = mounted && colorMode === "dark";
  const isLight = mounted && colorMode === "light";

  const hoverStyles = {
    color: "fg.accent",
    transform: "translateY(-1px)",
  };

  return (
    <Box
      as="section"
      id="clair-obscur"
      bottom="0"
      left="0"
      right="0"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={6}
    >
      <Container
        maxW="xl"
        px={6}
        py={3}
        {...glassStyles.heavy}
      >
        <Text
          fontSize={{ base: "md", md: "lg" }}
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
            color={isDark ? "fg" : "fg.muted"}
            fontWeight="medium"
            transition="all 0.3s ease"
            _hover={isDark ? hoverStyles : {}}
          >
            Clair
          </Text>{" "}
          <Text
            as="span"
            cursor={isLight ? "pointer" : "default"}
            onClick={() => isLight && setColorMode('dark')}
            color={isLight ? "fg" : "fg.muted"}
            fontWeight="medium"
            transition="all 0.3s ease"
            _hover={isLight ? hoverStyles : {}}
          >
            Obscur
          </Text>
          : Expedition 33
        </Text>
      </Container>
    </Box>
  );
};