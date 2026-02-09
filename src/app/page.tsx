'use client'

import { useState } from 'react';
import { VantaWaves } from '@/components/ui/vanta-waves';
import { Navbar } from '@/components/ui/nav-bar';
import { LoadingScreen } from '@/components/ui/loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [vantaProgress, setVantaProgress] = useState(0);

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={() => setIsLoading(false)} 
          vantaProgress={vantaProgress}
        />
      )}
      
      <main>
        <VantaWaves onProgress={setVantaProgress} />
        <Navbar />
      </main>
    </>
  );
}