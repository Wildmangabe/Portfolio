export interface ExperienceItem {
  value: string;
  role: string;
  company: string;
  location: string;
  time: string;
  summary: string; // Narrative overview
  contributions: string[]; // Technical bullet points
}

export const experienceData: ExperienceItem[] = [
  {
    value: "google",
    role: "SRE Intern",
    company: "Google LLC",
    location: "Pittsburgh, PA",
    time: "May 2024 – August 2024",
    summary: "Worked on an SRE/SWE team to design and implement a production-safe metadata update system used by Site Reliability Engineers. The project evolved from a Python-only solution into a cross-language utility leveraging Go, Python, and Protobuf-based RPC to improve reliability, maintainability, and operational safety in production environments.",
    contributions: [
      "Designed and scoped multiple implementation strategies, producing detailed design documents, architecture diagrams, and system audits to evaluate tradeoffs.",
      "Refactored an existing Python server architecture and handler hierarchy to enable seamless integration of production-safe metadata updates.",
      "Built a cross-language utility composed of a Golang CLI interface and a refactored Python backend via Protobuf-based RPC messaging.",
      "Improved reliability and operational safety by implementing structured RPC validation and clear failure handling mechanisms.",
      "Delivered a production-grade tool that acts as a 'last line of defense' for SREs, enabling safe remediation of live production issues."
    ],
  },
  {
    value: "cox",
    role: "SWE Intern",
    company: "Cox Auto Inc",
    location: "Austin, TX",
    time: "May 2023 – August 2023",
    summary: "Worked in an Agile Scrum team to deliver cloud-based internal tools leveraging AWS services and enterprise database systems. Contributed to cross-functional projects spanning data analysis, backend architecture, and machine learning prototyping, culminating in a high-performance NLP classification model.",
    contributions: [
      "Collaborated in a Scrum-based Agile environment, participating in full sprint lifecycles and peer reviews to deliver production-ready features.",
      "Built a cloud-integrated internal tool mapping performance managers to enterprise Oracle records using AWS S3 for storage and AWS Lambda for serverless compute.",
      "Delivered an end-to-end compliance analytics solution for the ProfitTime GPS product, correlating consumer adherence with profitability metrics.",
      "Strengthened engineering fundamentals through paired programming and the application of industry-standard design patterns in a cloud-native environment.",
      "Named Company Hackathon Finalist for developing an NLP classification model for vehicle parts, achieving a 0.002% performance difference from the production model."
    ],
  },
];