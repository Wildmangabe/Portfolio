'use client'

import { Box, Container, SimpleGrid, Heading, Icon, Flex } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { SectionHeader } from "@/components/ui/section-header";
import { glassStyles } from "@/app/theme";
import { TECH_STACK } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <Box
      as="section"
      id="tech-stack"
      minH="50vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Tech Stack" />
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          gap={6} 
          mt={12}
        >
          {TECH_STACK.map((group) => (
            <Box
              key={group.category}
              {...glassStyles.light}
              borderRadius="2xl"
              p={8}
              gridColumn={{ 
                lg: group.category === "Languages" ? "span 2" : "span 1" 
              }}
            >
              <Heading 
                size="xs" 
                mb={8} 
                letterSpacing="widest" 
                color="fg"
                textTransform="uppercase"
              >
                {group.category}
              </Heading>

              <Flex wrap="wrap" gap={8} justify="start">
                {group.skills.map((skill) => (
                  <Tooltip key={skill.name} content={skill.name} portalled>
                    <Box _hover={{ transform: "translateY(-4px)" }} transition="0.2s">
                      <Icon as={skill.icon} boxSize="8" color="fg" />
                    </Box>
                  </Tooltip>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}