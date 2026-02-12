import { Box, Container, VStack } from "@chakra-ui/react";
import { Typewriter } from "@/components/ui/typewriter";
import { glassStyles } from "@/app/theme";

interface HomeSectionProps {
  isLoadingComplete: boolean;
}

export function HomeSection({ isLoadingComplete }: HomeSectionProps) {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container 
        maxW="5xl"
        p={{ base: 8, md: 16 }} 
        {...glassStyles.heavy}
      >
        <VStack gap={4}>
          {isLoadingComplete && (
            <Typewriter
              text="Gabe Wild "
              speed={100}
              fontSize={{ base: "6xl", md: "8xl" }}
              fontWeight="bold"
              color="fg.onAccent"
              noDelete={true}
            />
          )}
          {isLoadingComplete && (
            <Typewriter 
              text="Software Engineer | Data Analyst | Tech Enthusiast | Lifelong Learner  "
              deleteSpeed={50}
              delay={500}
              pauseBeforeDelete={2000}
              loop={true}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="fg"
            />
          )}
        </VStack>
      </Container>
    </Box>
  );
}