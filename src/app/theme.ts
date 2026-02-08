import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: "#0a0a0a" },
          gray: { value: "#111111" },
          border: { value: "#262626" },
          offWhite: { value: "#ededed" },
          muted: { value: "#a1a1a1" },
        },
      },
      fonts: {
        heading: { value: "var(--font-geist-sans), sans-serif" },
        body: { value: "var(--font-geist-sans), sans-serif" },
        mono: { value: "var(--font-geist-mono), monospace" }, 
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "colors.brand.black" },
        },
        fg: {
          DEFAULT: { value: "colors.brand.offWhite" },
          muted: { value: "colors.brand.muted" },
        },
      },
    },
  },
globalCss: {
  "html, body": {
    margin: 0,
    padding: 0,
    bg: "bg",
    color: "fg",
    fontFamily: "var(--font-geist-sans), sans-serif",
    maxWidth: "100vw",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },
  "*": {
    boxSizing: "border-box",
  }
}
})

export const system = createSystem(defaultConfig, customConfig)