import { Code2, Brain, Database, Wrench } from "lucide-react";
import type { SkillGroup, TechItem } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 82 },
      { name: "Model Building", level: 80 },
      { name: "OpenCV", level: 78 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 55 },
      { name: "JavaScript", level: 70 },
      { name: "Problem Solving", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Wrench,
    skills: [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 72 },
      { name: "Bootstrap", level: 65 },
    ],
  },
  {
    title: "Data & Tools",
    icon: Database,
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Excel", level: 70 },
      { name: "GitHub", level: 82 },
      { name: "Figma / Canva", level: 68 },
    ],
  },
];

/** simple-icons slugs (react-icons/si => Si + PascalCase) */
export const techStack: TechItem[] = [
  { name: "Python", slug: "python" },
  { name: "Java", slug: "openjdk" },
  { name: "JavaScript", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "OpenCV", slug: "opencv" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "scikit-learn", slug: "scikitlearn" },
  { name: "Streamlit", slug: "streamlit" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "Power BI", slug: "powerbi" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "Canva", slug: "canva" },
  { name: "Jupyter", slug: "jupyter" },
];
