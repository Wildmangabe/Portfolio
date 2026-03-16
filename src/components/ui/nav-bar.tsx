'use client'

import { useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { NavButton } from "./nav-button";
import { glassDecorations, glassEffects } from "@/app/theme";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "About", "Experience", "Projects", "Leadership", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top="4"
      left="0"
      right="0"
      zIndex="sticky"
      display="flex"
      justifyContent="center"
    >
      <Box
        {...(isScrolled ? glassEffects.heavy : {})}
        {...(isScrolled ? glassDecorations.heavy : {})}
        borderColor={isScrolled ? "border.accent" : "transparent"}
        borderRadius="full"
        px={6}
        py={2}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <HStack gap={{ base: 1, md: 4 }}>
          {navItems.map((item) => (
            <NavButton key={item} name={item} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};