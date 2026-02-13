import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { ContactInfo } from "@/components/ui/contact-info";
import { MessageForm } from "@/components/ui/message-form";

export function ContactSection() {
  return (
    <Box as="section" id="contact" py={20}>
      <Toaster />
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} alignItems="center">
          <ContactInfo />
          <MessageForm />
        </SimpleGrid>
      </Container>
    </Box>
  );
}