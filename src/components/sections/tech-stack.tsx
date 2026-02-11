import { Box, Container } from "@chakra-ui/react";
import { SectionHeader } from "@/components/ui/section-header";

export function TechStackSection() {
  return (
    <Box
      as="section"
      id="tech-stack"
      minH="10vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Tech Stack" />

      </Container>
    </Box>
  );
}   