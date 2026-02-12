import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

export const glassStyles = {
  light: {
    backdropFilter: "blur(10px)",
    bg: "whiteAlpha.100",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "whiteAlpha.200",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  heavy: {
    backdropFilter: "blur(10px) saturate(150%)",
    bg: "rgba(0, 0, 0, 0.1)",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  }
}

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: "#0a0a0a" },
          gray: { value: "#111111" },
          white: { value: "#ffffff" },
          offWhite: { value: "#ededed" },
          green: { value: "#00ff51" },
          forest: { value: "#0b3d1e" },
          slate: { value: "#666666" }, 
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
          DEFAULT: { 
            value: { _light: "{colors.brand.white}", _dark: "{colors.brand.black}" } 
          },
          subtle: {
            value: { _light: "{colors.brand.offWhite}", _dark: "{colors.brand.forest}" }
          },
        },
        fg: {
          DEFAULT: { 
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.offWhite}" } 
          },
          muted: { 
            value: { _light: "{colors.brand.slate}", _dark: "{colors.brand.slate}" } 
          },
          accent: {
            value: { _light: "{colors.brand.offWhite}", _dark: "{colors.brand.green}" }
          },
          onAccent: {
            value: { _light: "{colors.brand.white}", _dark: "{colors.brand.black}" }
          }
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.brand.offWhite}", _dark: "{colors.brand.gray}" }
          },
          accent: {
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.green}" }
          }
        }
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      bg: "bg",
      color: "fg",
      fontFamily: "fonts.heading",
      maxWidth: "100vw",
      overflowX: "hidden",
      scrollBehavior: "smooth",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)