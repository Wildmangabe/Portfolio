/**
 * Portfolio Projects Data
 * 
 * This file contains all project information displayed on the portfolio.
 * Using TypeScript provides type safety and better developer experience.
 */

export interface Project {
  type: "AI/ML" | "Data Science" | "Web App" | "Mobile" ;
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
    type: "AI/ML",
    title: "Optimizing Network Intrusion Detection Systems (NIDS)",
    description: "A research study that evaluated and optimized various machine learning models (Random Forest, SVM, CNN) for identifying malicious web traffic using the CIC UNSW-NB15 Augmented Dataset. Achieved high-accuracy multi-class classification and reduced false alarm rates through systematic hyperparameter tuning using Optuna and Hyperopt.",
    links: {
      demo: "/Optimizing_Intrusion_Detection_through_Web_Traffic_Using_the_CIC_UNSW-NB15_Augmented_Dataset.pdf" 
    },
    tags: ["Cybersecurity", "Machine Learning", "Intrusion Detection", "Python", "Random Forest", "Neural Networks", "Hyperparameter Optimization"],
    importance: "high"
  },
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
      "Full-Stack"
    ],
    importance: "med",
  },
  {
    type: "Data Science",
    title: "Global Spotify Trends: Regional & Temporal Analysis",
    description: "A data mining project that deconstructed global music consumption from 2017-2021. Used audio-feature clustering (K-Means/DBSCAN) and dimensionality reduction (PCA/UMAP) to identify distinct 'music profiles' and analyze how preferences shift across 60+ countries.",
    links: {
      github: "https://github.com/Wildmangabe/spotify-trend-analysis",
      demo: "https://colab.research.google.com/drive/10brhy7pfc4WsMLQb-62AXSDOHfZ_VeeF?usp=sharing"
    },
    tags: ["Python", "Machine Learning", "Data Mining", "Data Engineering", "Clustering", "Data Pipeline", "Data Science", "Visualization"],
    importance: "high" 
  },
  {
  type: "Web App",
  title: "VideoVibes: Al-Mediated Video Conferencing",
  description: "An augmentation to the Jitsi Meet platform which integrated with real-time emotion recognition and sarcasm detection. Designed to enhance 'social presence' for neurodivergent users, it translates subtle facial and tonal cues into live emoji overlays for all users. Also includes a 'Learning Mode' for social-affective training.",
  links: {
    github: "https://github.com/arielamitr/VideoVibes",
    demo: "/VideoVibes_Paper.pdf" 
  },
  tags: ["React", "Node.js", "Python", "Jitsi Meet", "face-api.js", "Machine Learning", "WebRTC"],
  importance: "med"
  },
  {
  type: "AI/ML",
  title: "Lung and Colon Cancer Classification",
  description: "Developed a high-precision Vision Transformer (ViT) model to classify lung and colon cancer histopathological images. Achieved 99.63% accuracy in differentiating between benign and malignant cells, significantly outperformed standard benchmarks for early diagnostic support.",
  links: {
    github: "https://github.com/skandrigi/Ignite_LungColonTumor_Classification",
    demo: "https://huggingface.co/ebmonser/lung-cancer-image-classification" 
  },
  tags: ["Computer Vision", "Vision Transformer (ViT)", "PyTorch", "Healthcare AI", "Computational Biology"],
  importance: "high"
  }
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
