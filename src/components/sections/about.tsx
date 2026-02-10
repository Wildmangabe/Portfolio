import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";

export function AboutSection() {
  return (
    <Box
      as="section"
      id="about"
      minH="100vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="6xl">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          <GridItem>
            <Text fontSize="lg" color="fg" mb={4}>
              First paragraph about yourself goes here. Talk about your background,
              passion, and what drives you.
            </Text>
            <SocialLinks />
          </GridItem>

          <GridItem display="flex" justifyContent="center">
            <Box
              w={{ base: "250px", md: "320px" }}
              h={{ base: "250px", md: "320px" }}
              borderRadius="2xl"
              overflow="hidden"
              border="4px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              position="relative"
            >
              <Image
                src="/your-photo.jpg"
                alt="Gabe"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}