import { Box, Container, VStack, Text } from "@chakra-ui/react";
import { Typewriter } from "@/components/ui/typewriter";


export function HomeSection() {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="6xl">
        <VStack gap={4}>
          <Text
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="bold"
            color="fg"
          >
            Hi, I'm Gabe
          </Text>

          <Typewriter 
            text= "Software Engineer | Data Analyst | Tech Enthusiast | Leader | Lifelong Learner "
            speed={100}
            deleteSpeed={50}
            delay={1500}
            pauseBeforeDelete={2000}
            loop={true}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="fg.muted"
          />
        </VStack>
      </Container>
    </Box>
  );
}