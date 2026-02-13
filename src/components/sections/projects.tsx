import { useState } from "react";
import { Box, Container, Grid, Text, For, Tabs, Button, Center } from "@chakra-ui/react";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { getProjectsByType } from "@/data/projects";
import { glassDecorations, glassEffects, glassRadius, chakraAccent } from "@/app/theme";

const tabCategories = [
  { label: "All", type: "all" as const },
  { label: "AI/ML", type: "AI/ML" as const },
  { label: "Data Science", type: "Data Science" as const },
  { label: "Web App", type: "Web App" as const },
  { label: "Mobile", type: "Mobile" as const },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const LIMIT = 6;

  return (
    <Box
      as="section"
      id="projects"
      minH="90vh"
      alignItems="center"
      py={20}
    >
      <Container maxW="7xl" mx="auto">
        <SectionHeader title="Projects" />
        
        <Tabs.Root 
          variant="outline" 
          mt={8} 
          lazyMount 
          defaultValue="all"
          onValueChange={() => setShowAll(false)}
        >
          <Tabs.List borderColor="fg.muted">
            <For each={tabCategories}>
              {(category) => (
                <Tabs.Trigger 
                  key={category.type} 
                  value={category.type}
                  {...glassEffects.heavy}
                  {...glassDecorations.heavy}
                  _selected={{
                    bg: "bg.subtle",
                    color: "fg",
                  }}
                >
                  {category.label}
                </Tabs.Trigger>
              )}
            </For>
          </Tabs.List>

          <For each={tabCategories}>
            {(category) => {
              const allProjects = getProjectsByType(category.type);
              
              const visibleProjects = showAll 
                ? allProjects 
                : allProjects.slice(0, LIMIT);

              return (
                <Tabs.Content key={category.type} value={category.type}>
                  {allProjects.length === 0 ? (
                    <Text color="fg" textAlign="center" py={8}>
                      No projects in this category yet.
                    </Text>
                  ) : (
                    <>
                      <Grid
                        templateColumns={{
                          base: "1fr",
                          md: "repeat(2, 1fr)",
                          lg: "repeat(3, 1fr)",
                        }}
                        gap={6}
                        mt={6}
                      >
                        <For each={visibleProjects}>
                          {(project, index) => (
                            <ProjectCard key={index} project={project} />
                          )}
                        </For>
                      </Grid>

                      {allProjects.length > LIMIT && (
                        <Center mt={12}>
                          <Button 
                            variant="outline" 
                            {...chakraAccent}
                            size="lg"
                            fontWeight="bold"
                            {...glassEffects.heavy}
                            {...glassDecorations.heavy}
                            {...glassRadius}
                            onClick={() => setShowAll(!showAll)}
                            _hover={{ bg: "bg.subtle", color: "fg" }}
                          >
                            {showAll ? "Show Less" : `Show More `}
                          </Button>
                        </Center>
                      )}
                    </>
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