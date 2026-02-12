/**
 * Portfolio Projects Data
 * 
 * This file contains all project information displayed on the portfolio.
 * Using TypeScript provides type safety and better developer experience.
 */

export interface Project {
  type: "AI/ML" | "Web App" | "Mobile";
  title: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  tags: string[];
  importance: "high" | "med" | "low";
}

export const projects: Project[] = [
  {
    type: "Mobile",
    title: "Aggie Wine Glass",
    description:
      "iOS app that helps users discover wine by the glass at local restaurants in the College Station Area. The app combines web-scraped wine data from Vivino with a custom recommendation pipeline that adapts to user taste preferences through interactive onboarding and swipe-based feedback. Built with a SwiftUI frontend and a backend that handles data ingestion, ranking, and API delivery.",
    links: {
      github: "https://github.com/mayashah-tam/AggieWineGlass",
      demo: "https://youtu.be/cNIVOrH7QGw?si=oiwApYIp68kWx0tm",
    },
    tags: [
      "SwiftUI",
      "iOS",
      "Recommendation",
      "Personalization",
      "Machine Learning",
      "User Preference Modeling",
      "Web Scraping",
      "Data Pipeline",
      "Full-Stack",
    ],
    importance: "high",
  },
  {
    type: "Web App",
    title: "Personal Portfolio",
    description:
      "Modern portfolio website built with Next.js and Chakra UI hosted on Vercel. Features glassmorphism design, project showcase with filterable tabs, and smooth animations.",
    links: {
      github: "https://github.com/Wildmangabe/Portfolio",
    },
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Chakra UI",
      "Vercel",
      "Modern UI/UX",
    ],
    importance: "med",
  },
  {
    type: "Mobile",
    title: "A&M Club Golf Team App",
    description:
      "Full-stack mobile application designed for managing Texas A&M Club Golf operations. The app streamlines team logistics by allowing officers to manage tournaments, team events, and leaderboards while members can view schedules, receive updates, and track competition details. Built with a SwiftUI frontend and a Vapor backend, this system features RESTful APIs, a PostgreSQL database with role-based access patterns, and automated event and match generation to support real-world club workflows.",
    links: {
      github: "https://github.com/tamu-csce-capstone-2025-spring-hammond/tamu-club-golf-app",
      demo: "https://www.youtube.com/playlist?list=PLiZ6NJLrw2Ojijl12RclfqVLO1YiKga4V",
    },
    tags: [
      "SwiftUI",
      "Swift Vapor",
      "iOS",
      "PostgreSQL",
      "REST API",
      "Mobile App Architecture",
      "Event Management",
      "Full-Stack"
    ],
    importance: "high",
  },
];

export function getProjectsByType(type: Project["type"] | "all"): Project[] {
  if (type === "all") return getProjectsByImportance("all");
  return projects.filter((project) => project.type === type);
}

export function getProjectsByImportance(importance: Project["importance"] | "all"): Project[] {
  if (importance === "all") {
    const highs = projects.filter((p) => p.importance === "high");
    const meds = projects.filter((p) => p.importance === "med");
    const lows = projects.filter((p) => p.importance === "low");
    return [...highs, ...meds, ...lows];
  }

  return projects.filter((project) => project.importance === importance);
}
