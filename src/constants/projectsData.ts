export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "HeartSense AI",
    description:
      "Advanced AI system for early heart disease detection and monitoring using machine learning algorithms.",
    category: "ai",
    technologies: ["Python", "Flask", "Scikit-learn", "HTML/CSS", "JavaScript"],
    features: [
      "Disease risk prediction",
      "Interactive health dashboard",
      "ML model integration",
      "Real-time analysis",
      "Secure data handling",
    ],
    liveUrl: "https://heartsense-aevb.onrender.com",
    githubUrl: "https://github.com/keval2310/HeartSense-AI",
    image: "💓",
    status: "completed",
  },
  {
    id: "proj2",
    title: "Gym Management System",
    description:
      "A full-stack application for managing gym memberships, tracking member details, and handling administrative tasks efficiently.",
    category: "fullstack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    features: [
      "Member registration & management",
      "Membership tier system",
      "Detailed member profiles",
      "Responsive admin dashboard",
      "CRUD operations for members",
    ],
    githubUrl: "https://github.com/keval2310/Gym-Management",
    image: "🏋️‍♂️",
    status: "completed",
  },
  {
    id: "proj3",
    title: "Mobile Store",
    description: "A feature-rich e-commerce mobile application for browsing products, managing carts, and processing orders.",
    category: "fullstack",
    technologies: ["React Native", "Redux", "Node.js", "Firebase", "Stripe"],
    features: [
      "User authentication & profiles",
      "Product catalog with search",
      "Shopping cart & wishlist",
      "Secure payment integration",
      "Order tracking history",
    ],
    githubUrl: "https://github.com/keval2310/Mobile-Store",
    image: "🛍️",
    status: "completed",
  },
  {
    id: "proj4",
    title: "DineFlow API",
    description:
      "A robust backend API for restaurant management, handling role-based access, order processing, and menu management.",
    category: "backend",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT"],
    features: [
      "Role-based authentication",
      "Menu & inventory management",
      "Real-time order processing",
      "Kitchen order management",
      "Secure API endpoints",
    ],
    githubUrl: "https://github.com/keval2310/DineFlow-API",
    image: "🍽️",
    status: "completed",
  },
  {
    id: "proj5",
    title: "Quiz Management System",
    description:
      "A comprehensive web application for creating, managing, and taking quizzes with user performance tracking.",
    category: "fullstack",
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
    features: [
      "User authentication & role management",
      "Quiz creation & management",
      "Real-time score calculation",
      "Admin dashboard",
      "Question bank management",
    ],
    githubUrl: "https://github.com/keval2310/Quiz-Management",
    image: "📝",
    status: "completed",
  },
  {
    id: "proj6",
    title: "Expense Manager",
    description:
      "A comprehensive expense tracking application for managing personal finances, budgets, and financial goals with detailed analytics.",
    category: "fullstack",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Chart.js"],
    features: [
      "Income & expense tracking",
      "Category-based budgeting",
      "Visual analytics & reports",
      "Multi-currency support",
      "Export data to CSV/PDF",
    ],
    image: "💰",
    status: "in-progress",
  },

];

export const categories = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "ai", label: "AI/ML" },
];
