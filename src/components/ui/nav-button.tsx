"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavButton = ({ name }: { name: string }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      color="whiteAlpha.800"
      fontWeight="medium"
      borderRadius="full"
      _hover={{
        bg: "whiteAlpha.200",
        color: "white",
      }}
      _active={{
        bg: "whiteAlpha.300",
      }}
    >
      <NextLink href={`#${name.toLowerCase()}`}>
        {name}
      </NextLink>
    </Button>
  );
};