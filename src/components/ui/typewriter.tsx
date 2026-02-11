'use client'

import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  pauseBeforeDelete?: number;
  loop?: boolean;
  noDelete?: boolean;
  onComplete?: () => void;
  fontSize?: object | string;
  color?: string;
  fontWeight?: string;
  [key: string]: any;
}

export function Typewriter({ 
  text, 
  speed = 100, 
  delay = 0,
  deleteSpeed = 50,
  pauseBeforeDelete = 2000,
  loop = false,
  noDelete = false,
  onComplete,
  fontSize,
  color,
  fontWeight,
  ...props 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && !isDeleting && displayedText === "") {
      const startTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isDeleting && currentIndex <= text.length) {
      if (currentIndex === text.length) {
        if (onComplete && !isDeleting) {
          onComplete();
        }
        
        if (noDelete) {
          setIsComplete(true);
          return;
        }
        
        const pauseTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
        return () => clearTimeout(pauseTimeout);
      }

      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentIndex >= 0) {
      if (currentIndex === 0) {
        if (loop) {
          setIsDeleting(false);
          const restartTimeout = setTimeout(() => {
            setCurrentIndex(1);
          }, delay);
          return () => clearTimeout(restartTimeout);
        }
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, deleteSpeed, pauseBeforeDelete, isDeleting, loop, displayedText, noDelete, onComplete]);

  return (
    <Text 
      fontSize={fontSize} 
      color={color} 
      fontWeight={fontWeight}
      {...props}
    >
      {displayedText}
      {!isComplete && <span style={{ opacity: 1 }}>|</span>}
    </Text>
  );
}