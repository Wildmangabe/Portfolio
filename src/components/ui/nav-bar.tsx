"use client";

import { Box, HStack } from "@chakra-ui/react";
import { NavButton } from "./nav-button";

export const Navbar = () => {
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <Box
      as="nav"
      position="fixed"
      top="6"
      left="0"
      right="0"
      zIndex="sticky"
      display="flex"
      justifyContent="center"
    >
      <Box
        bg="rgba(15, 15, 15, 0.4)" 
        backdropFilter="blur(16px) saturate(180%)" 
        borderRadius="full"
        border="1px solid"
        borderColor="whiteAlpha.200"
        px={6}
        py={2}
        boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.8)"
      >
        <HStack gap={{ base: 2, md: 6 }}>
          {navItems.map((item) => (
            <NavButton key={item} name={item} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};