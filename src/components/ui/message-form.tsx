"use client";

import { useEffect } from "react";
import { VStack, Input, Textarea, Button, Field, chakra } from "@chakra-ui/react";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { glassStyles } from "@/app/theme";
import { useForm, ValidationError } from '@formspree/react';
import { toaster } from "@/components/ui/toaster";

export function MessageForm() {
  const [state, handleSubmit] = useForm("xjgeyejq");

  useEffect(() => {
    if (state.succeeded) {
      queueMicrotask(() => {
        toaster.create({
          title: "Message Sent",
          description: "Your message has been sent successfully.",
          type: "success",
        });
      });
    }
  }, [state.succeeded]);

  return (
    <chakra.form 
      onSubmit={handleSubmit}
      p={10} 
      {...glassStyles.heavy}
      borderRadius="3xl"
    >
      <VStack gap={5} align="stretch">
        <Field.Root required disabled={state.succeeded}>
          <Field.Label>Name</Field.Label>
          <Input 
            name="name"
            placeholder="Name" 
            variant="flushed" 
            _placeholder={{ color: "brand.slate" }}
          />
        </Field.Root>

        <Field.Root required disabled={state.succeeded}>
          <Field.Label>Email</Field.Label>
          <Input 
            name="email"
            type="email"
            placeholder="Email" 
            variant="flushed" 
            _placeholder={{ color: "brand.slate" }}
          />
          <Field.ErrorText>
            Please provide a valid email address.
          </Field.ErrorText>
        </Field.Root>
        <ValidationError field="email" prefix="Error" errors={state.errors} />

        <Field.Root required disabled={state.succeeded}>
          <Field.Label>Your Message</Field.Label>
          <Textarea 
            name="message"
            placeholder="Your Message..." 
            variant="flushed" 
            rows={4}
            _placeholder={{ color: "brand.slate" }}
          />
        </Field.Root>
        <ValidationError field="message" prefix="Error" errors={state.errors} />

        <Button 
          type="submit"
          loading={state.submitting}
          disabled={state.succeeded}
          colorPalette={state.succeeded ? "green" : "gray"}
          variant={state.succeeded ? "subtle" : "plain"}
          mt={4}
          mx='auto'
          w="fit-content"
          px={4}
          size="lg"
          color={state.succeeded ? "brand.green" : "fg"}
          _hover={!state.succeeded ? { 
            color: "brand.green",
            boxShadow: "0 0 30px {colors.brand.green}" 
          } : {}}
        >
          {state.succeeded ? (
            <> Sent <RiCheckLine /> </>
          ) : (
            <> Send Message <RiArrowRightLine /> </>
          )}
        </Button>
      </VStack>
    </chakra.form>
  );
}