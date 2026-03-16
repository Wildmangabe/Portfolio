export interface LeadershipValue {
  id: string
  title: string
  description: string
}

export interface LeadershipPillar {
  id: "self-awareness" | "empathy" | "creativity" | "purpose" | "wisdom"
  label: string
  description: string
}

export interface PersonalityTest {
  id: string
  name: string
  type: string
  summary: string
  tiles: {
    label: string
    description: string
  }[]
}

export const leadershipValues: LeadershipValue[] = [
  {
    id: "competition",
    title: "Competition",
    description:
      "I am energized by measurable goals and healthy rivalry that pushes teams to exceed expectations.",
  },
  {
    id: "justice",
    title: "Justice",
    description:
      "I care deeply about fairness, transparency, and making sure people are treated with consistency and respect.",
  },
  {
    id: "optimism",
    title: "Optimism",
    description:
      "I have the belief that things can get better, and the conviction to make it happen.",
  },
  {
    id: "determination",
    title: "Determination",
    description:
      "I stay with hard problems longer than most, relying on effort to turn ideas into reality.",
  },
]

export const leadershipPillars: LeadershipPillar[] = [
  {
    id: "self-awareness",
    label: "Self-Awareness",
    description:
      "Understanding my strengths, blind spots, and default reactions so I can choose how to show up instead of simply reacting. This includes seeking feedback, reflecting on outcomes, and noticing patterns in how I lead and follow.",
  },
  {
    id: "empathy",
    label: "Empathy",
    description:
      "After understanding myself, the next step is to understand others. Empathy is about connection. This connection is found through listening and vulnerability, and it is critical to building trust and understanding.",
  },
  {
    id: "creativity",
    label: "Creativity",
    description:
      "Creativity is not limited to the arts. It is about finding new ways to solve problems and make things better. Everyone has the ability to be creative; it's a skill to refine and something for a leader to bring out in others.",
  },
  {
    id: "purpose",
    label: "Purpose",
    description:
      "Purpose is not only important for being a good leader, but for living a fulfilling life. Being able to evaluate your surroundings and how they align with your values is the key to aligning purpose with action.",
  },
  {
    id: "wisdom",
    label: "Wisdom",
    description:
      "Wisdom is the ability to combine all of the above pillars while refining your skills and knowledge. It's about learning from experiences, growing as a person, and becoming a better leader.",
  },
]

export const personalityTests: PersonalityTest[] = [
  {
    id: "clifton-strengths",
    name: "CliftonStrengths",
    type: "Top 5 Themes",
    summary:
      "A strengths-based assessment that identifies the themes you naturally lean on when you learn, solve problems, and work with others.",
    tiles: [
      {
        label: "Competition",
        description: "Motivated by comparison and winning, I push myself and others to exceed expectations.",
      },
      {
        label: "Significance",
        description: "I want my work to matter. I aim for impact that is seen and felt by others.",
      },
      {
        label: "Adaptability",
        description: "I stay flexible under change, and I adjust plans quickly when needed with fluidity.",
      },
      {
        label: "Strategic",
        description: "I naturally spot patterns and paths, especially when there are many possible options.",
      },
      {
        label: "Achievement",
        description: "I feel most satisfied when progress is made, and tangible results are achieved.",
      },
    ],
  },
  {
    id: "myers-briggs",
    name: "Myers–Briggs Test",
    type: "ENTP-T",
    summary:
      "A personality framework that describes how you take in information and make decisions. ENTP types tend to be curious, idea-driven, and energized by debate and experimentation.",
    tiles: [
      {
        label: "Extraverted",
        description: "I gain energy from conversation, collaboration, and exploring ideas with others.",
      },
      {
        label: "Intuitive",
        description: "I focus more on patterns and possibilities than on step-by-step details.",
      },
      {
        label: "Thinking",
        description: "I tend to lean on logic and structure instead of emotions when making decisions.",
      },
      {
        label: "Perceiving",
        description: "I like to keep options and perspectives open, rather than locking into a rigid plan too early.",
      },
    ],
  },
]

