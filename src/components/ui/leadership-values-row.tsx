'use client'

import { Box, Grid, Card, Heading, Text } from "@chakra-ui/react"
import { glassDecorations, glassEffects, glassRadius } from "@/app/theme"
import { leadershipValues } from "@/data/leadership"

export function LeadershipValuesRow() {
  return (
    <Box mb={8}>
      <Text
        fontSize="sm"
        fontWeight="bold"
        letterSpacing="widest"
        textTransform="uppercase"
        color="fg.muted"
        textAlign="center"
        mb={4}
      >
        My Values
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
        }}
        gap={6}
        justifyItems="center"
      >
        {leadershipValues.map((value) => (
          <Card.Root
            key={value.id}
            {...glassEffects.light}
            {...glassDecorations.light}
            {...glassRadius}
            px={3}
            py={4}
            w="100%"
            maxW="180px"
          >
            <Card.Header p={0} display="flex" justifyContent="center">
              <Heading
                size="sm"
                color="fg.onAccent"
                textAlign="center"
                whiteSpace="nowrap"
              >
                {value.title}
              </Heading>
            </Card.Header>
            <Card.Body mt={2} p={0}>
              <Text
                color="fg.muted"
                fontSize="xs"
                lineHeight="tall"
                textAlign="center"
              >
                {value.description}
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  )
}

