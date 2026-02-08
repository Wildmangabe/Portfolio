'use client'

import { VantaWaves } from '@/components/ui/vanta-waves'

export default function Home() {
  return (
    <main>
      <VantaWaves onReady={() => console.log("Vanta is live!")} />
    </main>
  );
}