import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/social-links";
import { SectionHeader } from "@/components/ui/section-header";

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
      <Container maxW="7xl">
        <Box>
          <SectionHeader title="About Me" />
        </Box>
        
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          <GridItem>
            <Text fontSize="lg" color="fg.muted" mb={4}>
              Hi, I'm Gabe, a Graduate Computer Science student at Texas A&M University graduating in Spring 2026 with interests in software engineering, data science, and cybersecurity. What drives me is helping others make data driven decisions by building machines to make data more accessible and understandable. I'm passionate about learning and staying curious about new technologies and their applications. I bvelieve that the best ideas come from geniune conversation, collaboration and connection, so feel free to reach out!
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
                src="/gabe.jpg"
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