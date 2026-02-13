import { Link as ChakraLink, Box, Text, Image } from "@chakra-ui/react";

interface GlassLinkProps {
  href: string;
  icon?: string;
  alt?: string;
  label?: string;
  isExternal?: boolean;
}

export function GlassLink({ href, icon, alt, label, isExternal = true }: GlassLinkProps) {
  return (
    <ChakraLink
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      p={3}
      borderRadius="lg"
      _hover={{ 
        bg: "fg",
        "& img": { filter: { _light: "invert(1)", _dark: "invert(0)" } }
      }}
      _focus={{ 
        boxShadow: "none",
        outline: "none"
      }}
      transition="all 0.3s"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      {icon && (
        <Image
          src={icon}
          alt={alt || label || "icon"}
          w={6}
          h={6}
          objectFit="contain"
          filter="invert(1)"
          transition="filter 0.3s"
        />
      )}
      {label && (
        <Text color="fg" fontSize="sm">
          {label}
        </Text>
      )}
    </ChakraLink>
  );
}