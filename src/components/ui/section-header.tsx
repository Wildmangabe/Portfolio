'use client'

import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Box mb={8} textAlign="left">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color="fg"
        fontWeight="bold"
        mb={2}
      >
        {title}
      </Heading>
    </Box>
  );
};