import { Trophy, Award, Star, Rocket, Medal, Users } from "lucide-react";
import type { Achievement, Certification, CodingProfile } from "@/types";

export const certifications: Certification[] = [
  {
    title: "Microsoft Applied Skills",
    issuer: "Microsoft",
    date: "2025",
    skills: ["AI", "Data", "Cloud", "12 Certifications"],
  },
  {
    title: "Software Engineering",
    issuer: "NSDC Skill India",
    date: "2025",
    skills: ["Software Engineering", "SDLC"],
  },
  {
    title: "Power BI Visualization",
    issuer: "NSDC Skill India",
    date: "2024",
    skills: ["Power BI", "Data Visualization"],
  },
  {
    title: "EF SET English Certificate — C2 Proficiency",
    issuer: "EF SET",
    date: "2024",
    skills: ["English", "C2 Proficiency"],
  },
  {
    title: "AI, ML & Cloud Computing",
    issuer: "Coursera / Infosys / TCS",
    date: "2024",
    skills: ["AI", "Machine Learning", "Cloud"],
  },
  {
    title: "Cybersecurity & UI/UX",
    issuer: "LinkedIn Learning",
    date: "2024",
    skills: ["Cybersecurity", "UI/UX"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "2nd Place — Coding Competition",
    description:
      "Secured second place in a coding competition at Aadhi College of Engineering.",
    date: "2025",
    icon: Trophy,
  },
  {
    title: "3rd Place — Coding Competition",
    description:
      "Awarded third place in a coding competition at SDNB Vaishnav College for Women.",
    date: "2025",
    icon: Medal,
  },
  {
    title: "Smart India Hackathon",
    description:
      "Active participant in the Smart India Hackathon, collaborating on real-world problem statements.",
    date: "2025",
    icon: Rocket,
  },
  {
    title: "Odoo Hackathon",
    description:
      "Participated in the Odoo Hackathon, building solutions under time constraints.",
    date: "2024",
    icon: Star,
  },
  {
    title: "Smart Ideathon",
    description:
      "Took part in the Smart Ideathon, pitching innovative tech-driven ideas.",
    date: "2024",
    icon: Users,
  },
  {
    title: 'Author — "Pathfinder Python"',
    description:
      'Authored "Pathfinder Python: A Concept to Creation," published on Scribd.',
    date: "2024",
    icon: Award,
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "Harshu101106",
    url: "https://leetcode.com/u/Harshu101106",
    slug: "leetcode",
  },
  {
    platform: "HackerRank",
    username: "harshinisuresh10",
    url: "https://hackerrank.com/profile/harshinisuresh10",
    slug: "hackerrank",
  },
  {
    platform: "GitHub",
    username: "HARSHU101106",
    url: "https://github.com/HARSHU101106",
    slug: "github",
  },
  {
    platform: "LinkedIn",
    username: "harshinis06",
    url: "https://linkedin.com/in/harshinis06",
    slug: "linkedin",
  },
];
