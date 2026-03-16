'use client'

import {
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  Carousel,
  SimpleGrid,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { glassDecorations, glassEffects, glassRadius, chakraAccent } from "@/app/theme"
import { personalityTests } from "@/data/leadership"

export function PersonalityCarousel() {
  const [page, setPage] = useState(0)

  return (
    <Box
      {...glassEffects.heavy}
      {...glassDecorations.heavy}
      {...glassRadius}
      p={{ base: 6, md: 8 }}
    >
      <Carousel.Root
        slideCount={personalityTests.length}
        allowMouseDrag
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack justify="space-between" align="center" mb={2} px={1}>
          <Box>
            <Heading
              size="sm"
              color="fg.onAccent"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Personality
            </Heading>
          </Box>
        </HStack>

        <Carousel.ItemGroup>
          {personalityTests.map((test, index) => (
            <Carousel.Item key={test.id} index={index}>
              <Box px={1} pt={2}>
                <Text fontWeight="bold" color="fg" fontSize="sm">
                  {test.name}
                </Text>
                <Text color="fg.onAccent" fontSize="sm" mb={3}>
                  {test.type}
                </Text>
                <Text
                  color="fg.muted"
                  fontSize="sm"
                  lineHeight="tall"
                  mb={6}
                >
                  {test.summary}
                </Text>

                <SimpleGrid columns={test.tiles.length} gap={4} alignItems="stretch">
                  {test.tiles.map((tile) => (
                    <Box
                      key={tile.label}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="border.accent"
                      py={2}
                      px={2}
                      textAlign="center"
                    >
                      <Text color="fg.onAccent" fontWeight="bold" fontSize="2xs">
                        {tile.label}
                      </Text>
                      <Text color="fg" fontSize="2xs" mt={1} lineHeight="tall">
                        {tile.description}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.Control justifyContent="center" gap={4} mt={4}>
          <Carousel.PrevTrigger asChild>
            <IconButton
              aria-label="Previous personality insight"
              size="sm"
              variant="outline"
              {...chakraAccent}
            >
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.Indicators />

          <Carousel.NextTrigger asChild>
            <IconButton
              aria-label="Next personality insight"
              size="sm"
              variant="outline"
              {...chakraAccent}
            >
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>
    </Box>
  )
}

