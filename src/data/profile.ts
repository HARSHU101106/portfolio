import type { NavItem, SocialLink } from "@/types";

export const profile = {
  name: "Harshini",
  fullName: "Harshini S",
  role: "CS + AI Undergraduate",
  titles: [
    "AI / ML Enthusiast",
    "Data Science Explorer",
    "Computer Vision Developer",
    "Problem Solver",
  ],
  tagline:
    "AI-focused Computer Science student building intelligent, real-world solutions — from computer vision and chatbots to IoT-powered automation.",
  bio: "I'm an AI-focused Computer Science & Artificial Intelligence undergraduate with hands-on experience in Machine Learning, Computer Vision, and IoT systems. I love turning ideas into real-world applications — intelligent automation systems, chatbots, and smart devices — backed by a strong foundation in Python, data analysis, and problem-solving.",
  location: "Chennai, India",
  email: "harshinisuresh2006@gmail.com",
  phone: "+91 98840 88249",
  resumeUrl: "/resume/Harshini-S-Resume.pdf",
  avatar: "/images/harshini.jpg",
  githubUsername: "HARSHU101106",
  available: true,
  quickFacts: [
    { label: "Focus", value: "AI / ML + Data Science" },
    { label: "Learning", value: "LLMs & Agentic AI" },
    { label: "Interests", value: "Computer Vision, IoT, Hackathons" },
    { label: "Based in", value: "Chennai, India" },
  ],
  stats: [
    { label: "Certifications", value: 15, suffix: "+" },
    { label: "Projects Built", value: 8, suffix: "+" },
    { label: "Microsoft Badges", value: 12, suffix: "" },
    { label: "Hackathons", value: 3, suffix: "+" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/HARSHU101106",
    slug: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/harshinis06",
    slug: "linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Harshu101106",
    slug: "leetcode",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=harshinisuresh2006@gmail.com",
    slug: "gmail",
  },
];

export const siteConfig = {
  url: "https://harshini.dev",
  ogImage: "/images/og.png",
  description:
    "Portfolio of Harshini S — AI-focused CS & Artificial Intelligence undergraduate building ML, computer vision, and data science products.",
};
