'use client'

import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { SectionHeader } from "@/components/ui/section-header"
import { LeadershipPhilosophyCard } from "@/components/ui/leadership-philosophy"
import { LeadershipValuesRow } from "@/components/ui/leadership-values-row"
import { ZlpReflectionCard } from "@/components/ui/zlp-reflection-card"
import { LeadershipPillarsAccordion } from "@/components/ui/leadership-pillars-accordion"
import { PersonalityCarousel } from "@/components/ui/personality-carousel"

export function LeadershipSection() {
  return (
    <Box
      as="section"
      id="leadership"
      minH="10vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Leadership" />

        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={8} alignItems="start" mt={10}>
          {/* Left column: philosophy, values, ZLP reflection */}
          <GridItem>
            <LeadershipPhilosophyCard />
            <LeadershipValuesRow />
            <ZlpReflectionCard />
          </GridItem>

          {/* Right column: pillars accordion + personality carousel */}
          <GridItem>
            <LeadershipPillarsAccordion />
            <PersonalityCarousel />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
