import { Accordion, Box, Container, Text, Flex, VStack, HStack, List,Heading } from '@chakra-ui/react';
import { SectionHeader } from '@/components/ui/section-header';
import { glassDecorations, glassEffects, glassRadius } from '@/app/theme';
import { experienceData } from '@/data/experience';

export function ExperienceSection() {
  return (
    <Box as="section" id="experience" py={20}>
      <Container maxW="7xl">
        <SectionHeader title="Experience" />
        
        <Accordion.Root 
          collapsible 
          defaultValue={["google"]} 
          {...glassEffects.light}
          {...glassDecorations.light}
          {...glassRadius}
          p={{ base: 2, md: 4 }}
        >
          {experienceData.map((item) => (
            <Accordion.Item key={item.value} value={item.value} borderBottom="1px solid rgba(255,255,255,0.1)">
              <Accordion.ItemTrigger _hover={{ bg: "whiteAlpha.50" }} py={6}>
                <Flex flex="1" justify="space-between" align={{ base: "start", md: "center" }} direction={{ base: "column", md: "row" }} gap={4} pr={4}>
                  <VStack align="start" gap={0}>
                    <Text color="fg" fontWeight="bold" fontSize="xl">
                      {item.role}
                    </Text>
                    <HStack gap={2} fontSize="md">
                      <Text color="brand.green" fontWeight="bold">{item.company}</Text>
                      <Text color="fg.muted">•</Text>
                      <Text color="fg.muted">{item.location}</Text>
                    </HStack>
                  </VStack>
                  <Text fontSize="sm" color="fg.muted" fontWeight="medium">
                    {item.time}
                  </Text>
                </Flex>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              
              <Accordion.ItemContent>
                <VStack align="start" gap={6} pb={8} pl={{ base: 4, md: 8 }} pr={4} mt={2}>
                  <Box borderLeft="2px solid" borderColor="brand.green" pl={4}>
                    <Text color="fg" fontSize="md" lineHeight="relaxed">
                      {item.summary}
                    </Text>
                  </Box>
                  <Box w="full">
                    <Heading size="xs" textTransform="uppercase" letterSpacing="widest" color="brand.green" mb={4}>
                      Key Contributions
                    </Heading>
                    <List.Root gap={3} variant="plain">
                      {item.contributions.map((bullet, i) => (
                        <List.Item 
                          key={i} 
                          color="fg" 
                          fontSize="md" 
                          lineHeight="tall"
                          position="relative"
                          pl={6}
                          _before={{
                            content: '"•"',
                            color: "brand.green",
                            position: "absolute",
                            left: "0",
                            fontWeight: "bold"
                          }}
                        >
                          {bullet}
                        </List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </VStack>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </Box>
  );
}