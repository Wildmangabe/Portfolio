'use client'

import { Accordion, Box, Heading, HStack, Text } from "@chakra-ui/react"
import { glassDecorations, glassEffects, glassRadius } from "@/app/theme"
import { leadershipPillars } from "@/data/leadership"

export function LeadershipPillarsAccordion() {
  return (
    <Box
      {...glassEffects.light}
      {...glassDecorations.light}
      {...glassRadius}
      p={{ base: 3, md: 4 }}
      mb={8}
      minH={{ base: "320px", md: "380px" }}
    >
      <Heading
        size="sm"
        mb={3}
        color="fg.onAccent"
        letterSpacing="widest"
        textTransform="uppercase"
      >
        Pillars of Leadership
      </Heading>

      <Accordion.Root
        variant="subtle"
        defaultValue={["self-awareness"]}
      >
        {leadershipPillars.map((pillar) => (
          <Accordion.Item
            key={pillar.id}
            value={pillar.id}
            borderBottom="1px solid"
            borderColor="border.subtle"
          >
            <Accordion.ItemTrigger py={4} _hover={{ bg: "whiteAlpha.50" }}>
              <HStack justify="space-between" align="center" w="full">
                <Heading size="sm" color="fg">
                  {pillar.label}
                </Heading>
                <Accordion.ItemIndicator color="fg" />
              </HStack>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Text
                  color="fg.muted"
                  fontSize="sm"
                  lineHeight="tall"
                  pb={4}
                >
                  {pillar.description}
                </Text>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  )
}

