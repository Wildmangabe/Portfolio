import { HStack } from "@chakra-ui/react";
import { GlassLink } from "@/components/ui/glass-button";

export function SocialLinks() {
  return (
    <HStack gap={4}>
      <GlassLink
        href="https://github.com/Wildmangabe"
        icon="/icons/github.svg"
        alt="GitHub"
      />
      
      <GlassLink
        href="https://linkedin.com/in/gabriel-wild/"
        icon="/icons/linkedin.svg"
        alt="LinkedIn"
      />
      
      <GlassLink
        href="mailto:wildmangabe@gmail.com"
        icon="/icons/email.svg"
        alt="Email"
      />
      
      <GlassLink
        href="/Resume.pdf"
        icon="/icons/resume.svg"
        alt="Resume"
      />
    </HStack>
  );
}