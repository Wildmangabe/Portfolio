'use client'

import { Box, HStack } from "@chakra-ui/react";
import { NavButton } from "./nav-button";

export const Navbar = () => {
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

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
        bg="rgba(10, 10, 10, 0.5)" 
        backdropFilter="blur(12px) saturate(150%)" 
        borderRadius="full"
        border="1px solid"
        borderColor="brand.border" 
        px={5}
        py={1.5}
        shadow="0 4px 24px -1px rgba(0, 0, 0, 0.5)"
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