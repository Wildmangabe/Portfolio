'use client'

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavButton = ({ name }: { name: string }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      color="fg" 
      fontWeight="medium"
      borderRadius="full"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: "colors.brand.offWhite", 
        transform: "translateY(-1px)",
      }}
    >
      <NextLink href={`#${name.toLowerCase()}`}>
        {name}
      </NextLink>
    </Button>
  );
};