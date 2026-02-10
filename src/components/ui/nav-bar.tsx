'use client'

import { useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { NavButton } from "./nav-button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

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
        bg={isScrolled ? "rgba(10, 10, 10, 0.5)" : "transparent"}
        backdropFilter={isScrolled ? "blur(12px) saturate(100%)" : "none"}
        borderRadius="full"
        border="1px solid"
        borderColor={isScrolled ? "brand.border" : "transparent"}
        px={5}
        py={1.5}
        shadow={isScrolled ? "0 4px 24px -1px rgba(0, 0, 0, 0.5)" : "none"}
        transition="all 0.3s ease-in-out"
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