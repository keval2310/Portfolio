import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import { Technology, SkillCategory } from "@/types/technologies";
import { FilterOption } from "@/components/common/FilterComponent";

export const categories: SkillCategory[] = [
  { id: "frontend", name: "FRONTEND", icon: FaReact, color: "text-blue-400" },
  { id: "backend", name: "BACKEND", icon: FaNodeJs, color: "text-green-400" },
  {
    id: "database",
    name: "DATABASE",
    icon: FaDatabase,
    color: "text-purple-400",
  },
  { id: "cloud", name: "CLOUD", icon: FaCloud, color: "text-yellow-400" },
  { id: "tools", name: "TOOLS", icon: FaTools, color: "text-red-400" },
];

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React",
    level: 95,
    category: "frontend",
    icon: "⚛️",
    description: "Building interactive UIs",
    experience: "4+ years",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "frontend",
    icon: "📘",
    description: "Type-safe development",
    experience: "3+ years",
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    icon: "🔼",
    description: "Full-stack React framework",
    experience: "2+ years",
  },
  {
    name: "Vue.js",
    level: 80,
    category: "frontend",
    icon: "💚",
    description: "Progressive framework",
    experience: "2+ years",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: "🎨",
    description: "Utility-first CSS",
    experience: "3+ years",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    icon: "🟨",
    description: "ES6+ modern features",
    experience: "5+ years",
  },

  // Backend
  {
    name: "Node.js",
    level: 90,
    category: "backend",
    icon: "🟢",
    description: "Server-side JavaScript",
    experience: "4+ years",
  },
  {
    name: "Python",
    level: 85,
    category: "backend",
    icon: "🐍",
    description: "Backend & data science",
    experience: "3+ years",
  },
  {
    name: "Express.js",
    level: 90,
    category: "backend",
    icon: "🚂",
    description: "Fast web framework",
    experience: "4+ years",
  },
  {
    name: "FastAPI",
    level: 80,
    category: "backend",
    icon: "⚡",
    description: "Modern Python API framework",
    experience: "2+ years",
  },
  {
    name: "REST APIs",
    level: 95,
    category: "backend",
    icon: "🌐",
    description: "RESTful architecture",
    experience: "5+ years",
  },

  // Database
  {
    name: "MongoDB",
    level: 85,
    category: "database",
    icon: "🍃",
    description: "NoSQL document database",
    experience: "3+ years",
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "database",
    icon: "🐘",
    description: "Relational database",
    experience: "3+ years",
  },
  {
    name: "MySQL",
    level: 80,
    category: "database",
    icon: "🐬",
    description: "Popular SQL database",
    experience: "3+ years",
  },
  {
    name: "Prisma",
    level: 85,
    category: "database",
    icon: "⚡",
    description: "Next-gen ORM",
    experience: "2+ years",
  },

  // Cloud
  {
    name: "AWS",
    level: 80,
    category: "cloud",
    icon: "☁️",
    description: "Cloud computing platform",
    experience: "3+ years",
  },
  {
    name: "Vercel",
    level: 90,
    category: "cloud",
    icon: "▲",
    description: "Frontend deployment",
    experience: "2+ years",
  },

  // Tools
  {
    name: "Git",
    level: 95,
    category: "tools",
    icon: "📦",
    description: "Version control",
    experience: "5+ years",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: "📝",
    description: "Code editor",
    experience: "5+ years",
  },

  {
    name: "Linux",
    level: 85,
    category: "tools",
    icon: "🐧",
    description: "Operating system",
    experience: "4+ years",
  },
];

export const filterOptions: FilterOption[] = [
  { id: "all", label: "ALL" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "database", label: "DATABASE" },
  { id: "cloud", label: "CLOUD" },
  { id: "tools", label: "TOOLS" },
];
