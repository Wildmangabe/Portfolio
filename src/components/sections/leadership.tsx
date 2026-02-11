import { Box, Container } from "@chakra-ui/react";
import { SectionHeader } from "@/components/ui/section-header";

export function LeadershipSection() {
  return (
    <Box
      as="section"
      id="leadership"
      minH="10vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Leadership" />

      </Container>
    </Box>
  );
}   