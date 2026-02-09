'use client'

import { Box, HStack } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  vantaProgress: number;
}

export const LoadingScreen = ({ onLoadingComplete, vantaProgress }: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (vantaProgress >= 100) {
      setIsComplete(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  }, [vantaProgress, onLoadingComplete]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="bg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      opacity={isComplete ? 0 : 1}
      transition="opacity 0.5s ease-out"
      pointerEvents={isComplete ? 'none' : 'auto'}
    >
      <Box width="80%" maxWidth="500px">
        <Progress.Root 
          value={vantaProgress}
          width="100%"
          colorPalette="gray"
          size="md"
          striped
          animated
        >
          <Progress.Label 
            color="fg" 
            fontSize="xl" 
            fontWeight="medium" 
            fontFamily="heading"
            mb={4}
          >
            Compiling without errors ... (first time)
          </Progress.Label>
          
          <HStack gap={5}>
            <Progress.Track flex="1">
              <Progress.Range />
            </Progress.Track>
            <Progress.ValueText 
              color="fg.muted" 
              fontSize="sm" 
              fontWeight="medium" 
              fontFamily="mono"
              minW="45px" 
            />
          </HStack>
        </Progress.Root>
      </Box>
    </Box>
  );
};