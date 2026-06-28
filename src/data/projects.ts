import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "smart-disaster-rover",
    title: "Smart Disaster Response & Safety Rover",
    tagline: "IoT + AI rover that detects hazardous environments",
    description:
      "An IoT-enabled rover that detects hazardous environments using integrated sensors and real-time monitoring to improve early risk detection. Demonstrates practical application of embedded systems and automation for disaster response.",
    category: "AI/ML",
    tech: ["IoT", "Arduino", "Sensors", "Embedded Systems", "Python"],
    featured: true,
    metric: { label: "Domain", value: "IoT + AI" },
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2025,
  },
  {
    slug: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    tagline: "Automated attendance using facial recognition",
    description:
      "An automated attendance system built with facial recognition. Implements image processing and classification using Python and OpenCV to improve accuracy and reduce manual intervention in attendance tracking.",
    category: "AI/ML",
    tech: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
    featured: true,
    metric: { label: "Domain", value: "Computer Vision" },
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2025,
  },
  {
    slug: "llm-chatbot",
    title: "LLM-Based Chatbot",
    tagline: "Interactive conversational chatbot with Streamlit",
    description:
      "An interactive chatbot built using the OpenAI API with a responsive user interface designed in Streamlit, enabling natural conversational interaction for user queries.",
    category: "AI/ML",
    tech: ["Python", "Streamlit", "OpenAI API", "LLMs"],
    featured: true,
    metric: { label: "Built with", value: "Streamlit" },
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2025,
  },
  {
    slug: "mood-based-art-generator",
    title: "Mood-Based Art Generator",
    tagline: "Generates art from detected emotions",
    description:
      "A computer vision system that detects user emotions through facial detection and classification, then generates corresponding art based on the detected mood.",
    category: "AI/ML",
    tech: ["Python", "Computer Vision", "Facial Detection"],
    metric: { label: "Domain", value: "Computer Vision" },
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2024,
  },
  {
    slug: "frontend-showcase",
    title: "Frontend Project Showcase",
    tagline: "Astronomy Learning, Yoga Platform & Café websites",
    description:
      "A collection of responsive frontend projects — an Astronomy Learning site, a Yoga Platform, and a Café website — built to practice clean, accessible UI with HTML, CSS, and JavaScript.",
    category: "Full Stack",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    metric: { label: "Projects", value: "3" },
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2024,
  },
  {
    slug: "mit-app-inventor",
    title: "Mobile App (MIT App Inventor)",
    tagline: "Mobile application built with MIT App Inventor",
    description:
      "A mobile application developed using MIT App Inventor, exploring block-based development to deliver a functional, user-friendly Android experience.",
    category: "Other",
    tech: ["MIT App Inventor", "Mobile"],
    links: {
      github: "https://github.com/HARSHU101106",
    },
    year: 2024,
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "AI/ML",
  "Data Science",
  "Other",
] as const;
