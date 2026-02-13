import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabe Wild Personal Portfolio",
  description: "Website and portfolio of Gabe Wild, a software developer. Created using Next.js and Chakra UI, hosted on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script 
          src="/libs/three.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/libs/p5.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/libs/vanta.topology.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="/libs/vanta.waves.min.js" 
          strategy="beforeInteractive"
        />
        <link
          rel="preload"
          href="/audio/gustave-E33.mp3"
          as="audio"
          type="audio/mpeg"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          {children}
          <SpeedInsights />
        </Provider>
      </body>
    </html>
  );
}