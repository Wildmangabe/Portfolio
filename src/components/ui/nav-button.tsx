'use client'

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavButton = ({ name }: { name: string }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      fontWeight="medium"
      transition="all 0.2s ease-in-out"
    >
      <NextLink href={`#${name.toLowerCase()}`}>
        {name}
      </NextLink>
    </Button>
  );
};