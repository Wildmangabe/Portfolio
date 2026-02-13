import {
  Card,
  HStack,
  Badge,
  Button,
  Link,
  For,
  VStack,
} from "@chakra-ui/react";
import { glassDecorations, glassEffects, chakraAccent } from "@/app/theme";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card.Root
      size="sm"
      variant="outline"
      transition="all 0.3s"
      {...glassEffects.heavy}
      {...glassDecorations.heavy}
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
        bg: "rgba(0, 0, 0, 0.29)",
      }}
    >
      <Card.Body gap={4}>
        <Card.Title>{project.title}</Card.Title>
        <Card.Description lineHeight="tall">
          {project.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <VStack gap={2} align="start">
          {project.tags && project.tags.length > 0 && (
          <HStack flexWrap="wrap" gap={2} mt={2}>
            <For each={project.tags}>
              {(tag) => (
                <Badge
                  key={tag}
                  {...chakraAccent}
                  variant="subtle"
                  size="sm"
                >
                  {tag}
                </Badge>
              )}
            </For>
          </HStack>
        )}
          <HStack gap={2}>
            {project.links.github && (
              <Button asChild size="sm" variant="outline" {...chakraAccent} >
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuGithub />
                  Code
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button asChild size="sm" colorPalette="gray">
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink />
                  Demo
                </Link>
              </Button>
            )}
          </HStack>
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
}