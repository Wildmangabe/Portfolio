'use client'

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavButton = ({ name }: { name: string }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="md"
      fontWeight="medium"
      transition="all 0.2s ease-in-out"
    >
    <NextLink 
      href="/"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {name}
    </NextLink>
    </Button>
  );
};