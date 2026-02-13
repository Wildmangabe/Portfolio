"use client";

import { Box, VStack, Text, Flex, Button, Image, Icon, useClipboard } from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";
import { SectionHeader } from "@/components/ui/section-header";
import { toaster } from "@/components/ui/toaster";
import { glassStyles } from "@/app/theme";

export function ContactInfo() {
  const email = "wildmangabe@email.com";
  const { copy } = useClipboard({ value: email });

  const handleCopy = () => {
    copy();
    toaster.create({
      title: "Email Copied",
      description: `${email} is ready to paste.`,
      type: "success",
    });
  };

  return (
    <VStack align="start" gap={6}>
      <SectionHeader title="Get In Touch." />

      <Box {...glassStyles.light} p={4}>
        <Text fontSize="lg" color="fg" maxW="400px">
          I’m always excited to meet new people and hear about new and 
          interesting topics in tech. Whether you have a project in mind or just 
          want to say hi, my inbox is always open.
        </Text>
      </Box>
      <Flex align="center" gap={3} mt={4}>
        <Button
          onClick={handleCopy}
          variant="outline"
          {...glassStyles.light}
          _hover={{ bg: "brand.whiteAlpha2", transform: "translateY(-2px)" }}
          p={0} 
          w="12" 
          h="12"
        >
          <Image
            src="/icons/email.svg"
            alt="Mail"
            boxSize="5"
            filter="brightness(0) invert(1)"
          />
        </Button>

        <Flex
          align="center"
          gap={3}
          h="12"
          px={4}
          {...glassStyles.light}
          color="fg"
          fontWeight="bold"
          fontSize="sm"
        >
          <Icon as={SiGooglemaps} boxSize={4} color="fg.accent" />
          <Text whiteSpace="nowrap">College Station, TX</Text>
        </Flex>
      </Flex>
    </VStack>
  );
}