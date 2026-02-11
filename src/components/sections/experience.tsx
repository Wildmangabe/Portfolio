import { Accordion, Box, Container, Span, Text, Flex, VStack, HStack } from '@chakra-ui/react';
import { SectionHeader } from '@/components/ui/section-header';

export function ExperienceSection() {
    const items = [
        { 
            value: "a", 
            role: "SRE Intern",
            company: "Google LLC",
            location: "Pittsburgh, PA",
            time: "Summer 2024",
            text: "Some value 1..." 
        },
        { 
            value: "b", 
            role: "SWE Intern",
            company: "Cox Auto Inc",
            location: "Austin, TX",
            time: "Summer 2023",
            text: "Some value 2..." 
        },
    ];

  return (
    <Box
      as="section"
      id="experience"
      minH="10vh"
      py={20}
    >
      <Container maxW="7xl">
        <SectionHeader title="Experience" />
        <Accordion.Root 
          collapsible 
          defaultValue={["a"]}
          bg="whiteAlpha.100"
          backdropFilter="blur(10px)"
          borderRadius="xl"
          border="1px solid"
          borderColor="whiteAlpha.200"
          p={4}
        >
            {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                <Accordion.ItemTrigger>
                    <Flex flex="1" justify="space-between" align="center" gap={4}>
                        <VStack align="start" gap={1}>
                            <Text color="fg" fontWeight="semibold">
                                {item.role}
                            </Text>
                            <HStack gap={2} fontSize="sm" color="fg.muted">
                                <Text>{item.company}</Text>
                                <Text>•</Text>
                                <Text>{item.location}</Text>
                            </HStack>
                        </VStack>
                        <Text fontSize="sm" color="fg.muted" whiteSpace="nowrap">
                            {item.time}
                        </Text>
                    </Flex>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                </Accordion.ItemContent>
                </Accordion.Item>
            ))}
            </Accordion.Root>
      </Container>
    </Box>
  );
}