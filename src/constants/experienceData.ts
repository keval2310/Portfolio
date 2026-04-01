import { Experience, Stat } from "../types";

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Full Stack Developer",
    company: "Cronabit Solutions",
    location: "Rajkot, Gujarat",
    duration: "2026 - Present",
    description: [
      "Lead development of scalable web applications using React and Node.js",
      "Mentor junior developers and conduct code reviews",
      "Architected microservices infrastructure serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    achievements: [
      "Increased application performance by 60%",
      "Lead team of 5 developers",
      "Delivered 5+ successful projects",
    ],
  },
];

export const experienceStats: Stat[] = [
  { label: "Months Experience", value: "2+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Coffee Consumed", value: "∞" },
];
