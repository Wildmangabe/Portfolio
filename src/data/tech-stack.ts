import { 
  // Languages
  SiCplusplus, SiPython, SiRust, SiTypescript, SiJavascript, 
  SiOpenjdk, SiMysql, SiSharp, SiGo, SiSwift,
  // Front End
  SiReact, SiNextdotjs, SiChakraui,
  // Back End
  SiNodedotjs, SiExpress, SiVapor,
  // Data & AI
  SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn,
  // Tools & Infra
  SiGit, SiDocker, SiAmazonwebservices, SiVercel, 
  SiPostgresql, SiGooglecolab, SiPostman 
} from "react-icons/si";

export const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Rust", icon: SiRust },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: SiOpenjdk },
      { name: "SQL", icon: SiMysql },
      { name: "C#", icon: SiSharp },
      { name: "Go", icon: SiGo },
      { name: "Swift", icon: SiSwift },
    ]
  },
  {
    category: "Front End",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "SwiftUI", icon: SiSwift },
      { name: "Chakra UI", icon: SiChakraui },
    ]
  },
  {
    category: "Back End",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Vapor", icon: SiVapor },
      { name: "Express", icon: SiExpress },
    ]
  },
  {
    category: "Data & AI",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "NumPy", icon: SiNumpy },
      { name: "pandas", icon: SiPandas },
      { name: "scikit-learn", icon: SiScikitlearn },
    ]
  },
  {
    category: "Tools & Infra",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Google Colab", icon: SiGooglecolab },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
    ]
  }
];