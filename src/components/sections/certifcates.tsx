import { Box, Container } from "@chakra-ui/react";
import { SectionHeader } from "@/components/ui/section-header";

export function CertificateSection() {
  return (
    <Box
      as="section"
      id="certificates"
      minH="10vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Certificates" />

      </Container>
    </Box>
  );
}   