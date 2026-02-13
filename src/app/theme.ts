import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

export const glassEffects = {
  light: {
    backdropFilter: "blur(10px)",
    bg: "glassLight.bg",
  },
  heavy: {
    backdropFilter: "blur(10px) saturate(150%)",
    bg: "glassHeavy.bg",
  }
}

export const glassDecorations = {
  light: {
    border: "1px solid",
    borderColor: "glassLight.border",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  heavy: {
    border: "1px solid",
    borderColor: "glassHeavy.border",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  }
}

export const glassRadius = {
  borderRadius: "xl",
}

export const chakraAccent = {
  colorPalette: {_light: "gray", _dark: "green"}
}

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: "#000000" },
          gray: { value: "#111111" },
          white: { value: "#ffffff" },
          offWhite: { value: "#ededed" },
          green: { value: "#00ff51" },
          forest: { value: "#2F855A" },
          slate: { value: "#666666" },
          lightSlate: { value: "#999999" },
          whiteAlpha1: {value: "#FFFFFF1A" },
          whiteAlpha2: {value: "#FFFFFF33" },
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
          },
          subtle: {
            value: { _light: "{colors.brand.black}", _dark: "{colors.brand.forest}" }
          }
        },
        glassLight: {
          bg: {
            value: { _light: "rgba(0, 0, 0, 0.1)", _dark: "colors.brand.whiteAlpha1" }
          },
          border: {
            value: { _light: "rgba(255, 255, 255, 0.2)", _dark: "colors.brand.whiteAlpha2" }
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