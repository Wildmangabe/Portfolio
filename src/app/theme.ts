import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

export const glassStyles = {
  light: {
    backdropFilter: "blur(10px)",
    bg: "glassLight.bg",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "glassLight.border",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  heavy: {
    backdropFilter: "blur(10px) saturate(150%)",
    bg: "glassHeavy.bg",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "glassHeavy.border",
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
          lightSlate: { value: "#999999" }
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
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.white}" } 
          },
          muted: { 
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.offWhite}" } 
          },
          accent: {
            value: { _light: "{colors.brand.offWhite}", _dark: "{colors.brand.green}" }
          },
          onAccent: {
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.green}" }
          }
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.brand.offWhite}", _dark: "{colors.brand.slate}" }
          },
          accent: {
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.green}" }
          }
        },
        glassLight: {
          bg: {
            value: { _light: "rgba(0, 0, 0, 0.1)", _dark: "rgba(107, 104, 104, 0.43)" }
          },
          border: {
            value: { _light: "rgba(255, 255, 255, 0.2)", _dark: "rgba(255, 255, 255, 0.07)" }
          }
        },
        glassHeavy: {
          bg: {
            value: { _light: "rgba(177, 177, 177, 0.15)", _dark: "rgba(0, 0, 0, 0.3)" }
          },
          border: {
            value: { _light: "rgba(7, 7, 7, 0.71)", _dark: "rgba(255, 255, 255, 0.1)" }
          } 
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