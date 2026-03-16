'use client'

import { Box, Heading, Text } from "@chakra-ui/react"
import { glassDecorations, glassEffects, glassRadius } from "@/app/theme"

export function ZlpReflectionCard() {
  return (
    <Box
      {...glassEffects.heavy}
      {...glassDecorations.heavy}
      {...glassRadius}
      p={{ base: 6, md: 8 }}
    >
      <Heading
        size="sm"
        mb={3}
        color="fg.onAccent"
        letterSpacing="widest"
        textTransform="uppercase"
      >
        Zachry Leadership Program Reflection
      </Heading>
      <Text color="fg.muted" lineHeight="tall" mb={3}>
        The Zachry Leadership Program (ZLP) has been one of the most formative
        parts of my time at Texas A&M. Over five semesters, I explored the
        pillars of self-awareness, empathy, creativity, purpose, and wisdom
        through retreats, reflections, and honest conversations with my cohort
        and mentors. The program pushed me to examine not just how I lead, but why I lead,
        and how my decisions affect the people and systems around me. ZLP has
        given me a community of thoughtful, driven peers who support me. They 
        instilled habits for learning and listening—something I’ll carry
        into every team I join. I’m deeply grateful to be a part of the ZLP
        family and to have had this experience.
      </Text>
    </Box>
  )
}

