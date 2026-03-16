'use client'

import { Box, Heading, Text } from "@chakra-ui/react"
import { glassDecorations, glassEffects, glassRadius } from "@/app/theme"

export function LeadershipPhilosophyCard() {
  return (
    <Box
      {...glassEffects.heavy}
      {...glassDecorations.heavy}
      {...glassRadius}
      p={{ base: 6, md: 8 }}
      mb={8}
    >
      <Heading
        size="sm"
        mb={4}
        color="fg.onAccent"
        letterSpacing="widest"
        textTransform="uppercase"
      >
        Leadership Philosophy
      </Heading>
      <Text color="fg.muted" lineHeight="tall" mb={3}>
        I believe leadership is about empowering growth, rooted in empathy and
        revealed through resilience. Great leaders understand people, invest in
        their development, and stay grounded when facing adversity.
      </Text>
      <Text color="fg.muted" lineHeight="tall">
        In practice, that means designing clear systems, communicating the why
        behind decisions, and creating space for others to bring their ideas
        forward. My goal is to make complex problems feel approachable so teams
        can contribute together.
      </Text>
    </Box>
  )
}

