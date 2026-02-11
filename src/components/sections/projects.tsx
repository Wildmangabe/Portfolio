import {
  Box,
  Container,
  Grid,
  Text,
  For,
  Tabs,
} from "@chakra-ui/react";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, getProjectsByType } from "@/data/projects";

const tabCategories = [
  { label: "All", type: "all" as const },
  { label: "AI/ML", type: "AI/ML" as const },
  { label: "Web App", type: "Web App" as const },
  { label: "Mobile", type: "Mobile" as const },
];

export function ProjectsSection() {

  return (
    <Box
      as="section"
      id="projects"
      minH="10vh"
      display="flex"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Projects" />

        <Tabs.Root variant="outline" colorPalette="gray" mt={8} lazyMount defaultValue="all">
          <Tabs.List>
            <For each={tabCategories}>
              {(category) => (
                <Tabs.Trigger 
                  key={category.type} 
                  value={category.type}
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(10px)"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  _dark={{
                    bg: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.15)",
                    _dark: {
                      bg: "rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  _selected={{
                    bg: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    _dark: {
                      bg: "rgba(0, 0, 0, 0.4)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  {category.label}
                </Tabs.Trigger>
              )}
            </For>
          </Tabs.List>

          <For each={tabCategories}>
            {(category) => {
              const filteredProjects = getProjectsByType(category.type);

              return (
                <Tabs.Content key={category.type} value={category.type}>
                  {filteredProjects.length === 0 ? (
                    <Text color="gray.500" textAlign="center" py={8}>
                      No projects in this category yet.
                    </Text>
                  ) : (
                    <Grid
                      templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                      }}
                      gap={6}
                      mt={6}
                    >
                      <For each={filteredProjects}>
                        {(project, index) => (
                          <ProjectCard key={index} project={project} />
                        )}
                      </For>
                    </Grid>
                  )}
                </Tabs.Content>
              );
            }}
          </For>
        </Tabs.Root>
      </Container>
    </Box>
  );
}