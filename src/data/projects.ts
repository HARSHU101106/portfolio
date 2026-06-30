import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "glamour-beauty-boutique-app",
    title: "Glamour Beauty & Boutique App",
    tagline: "Cross-platform mobile app for a beauty parlour & boutique",
    description:
      "A cross-platform mobile application for a beauty parlour and boutique, built with React Native and Expo. Lets users browse services, explore boutique offerings, and book appointments through a clean, mobile-first experience. A downloadable Android APK is available.",
    category: "Full Stack",
    tech: ["React Native", "Expo", "JavaScript", "Mobile"],
    featured: true,
    metric: { label: "Platform", value: "Android" },
    links: {
      github: "https://github.com/HARSHU101106/beauty_parlur_and_botique_app",
      download:
        "https://expo.dev/accounts/harshini101106/projects/beauty-parlour-app/builds/841f8f20-75ce-4301-99a2-0de39e3a321a",
    },
    year: 2025,
  },
  {
    slug: "harsh-core-chatbot",
    title: "Harsh Core Chatbot",
    tagline: "LLM-powered conversational chatbot on Streamlit",
    description:
      "An interactive LLM-based chatbot with a responsive Streamlit interface, enabling natural conversational interaction for user queries. Deployed live on Streamlit Cloud for instant access.",
    category: "AI/ML",
    tech: ["Python", "Streamlit", "LLMs", "NLP"],
    featured: true,
    metric: { label: "Built with", value: "Streamlit" },
    links: {
      github: "https://github.com/HARSHU101106/CHATBOT-LLM",
      demo: "https://chatbot-llm-h6dtxwutve5bme6yfnyq2w.streamlit.app/",
    },
    year: 2025,
  },
  {
    slug: "automated-attendance-system",
    title: "Automated Attendance System",
    tagline: "Facial recognition attendance with a live Streamlit app",
    description:
      "An automated attendance system built with facial recognition. Implements image processing and classification using Python and OpenCV to improve accuracy and reduce manual intervention, deployed as a live Streamlit app.",
    category: "AI/ML",
    tech: ["Python", "OpenCV", "Computer Vision", "Streamlit"],
    featured: true,
    metric: { label: "Domain", value: "Computer Vision" },
    links: {
      github: "https://github.com/HARSHU101106/automated-attendance-system",
      demo: "https://automated-attendance-system-dbqcb9ztjscvdecchvzghw.streamlit.app/",
    },
    year: 2025,
  },
  {
    slug: "mood-based-art-generator",
    title: "Mood-Based Art Generator",
    tagline: "Generates art from detected emotions",
    description:
      "A computer vision system that detects user emotions through facial detection and classification, then generates corresponding art based on the detected mood. Available as a live Streamlit application.",
    category: "AI/ML",
    tech: ["Python", "Computer Vision", "Facial Detection", "Streamlit"],
    metric: { label: "Domain", value: "Computer Vision" },
    links: {
      github:
        "https://github.com/HARSHU101106/mood_based_art_generator_cvproject",
      demo: "https://moodbasedartgeneratorcvproject-5cbmksmdkqrvnvfa6ei5ck.streamlit.app/",
    },
    year: 2024,
  },
  {
    slug: "student-performance-predictor",
    title: "Student's Performance Predictor",
    tagline: "ML model that predicts student academic performance",
    description:
      "A machine learning application that predicts student academic performance from key inputs, helping identify students who may need additional support. Built in Python and deployed as an interactive Streamlit app.",
    category: "Data Science",
    tech: ["Python", "Machine Learning", "scikit-learn", "Streamlit"],
    metric: { label: "Domain", value: "Predictive ML" },
    links: {
      github: "https://github.com/HARSHU101106/student_performance_predictor",
      demo: "https://studentperformancepredictor-nlosma7xyxllfma8bcxxpw.streamlit.app/",
    },
    year: 2024,
  },
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
      demo: "https://www.linkedin.com/posts/harshinis06_if-my-smart-disaster-response-and-safety-ugcPost-7429198168006975488-UaSC/",
    },
    year: 2025,
  },
  {
    slug: "pathfinder-python-book",
    title: "Pathfinder: Python Concept to Creation",
    tagline: "Authored book taking Python from concept to creation",
    description:
      "An authored book, 'Pathfinder: Python — Concept to Creation', that guides readers from foundational Python concepts through to building real projects. Published and available to read online.",
    category: "Other",
    tech: ["Python", "Technical Writing", "Education"],
    metric: { label: "Type", value: "Published Book" },
    links: {
      demo: "https://www.scribd.com/document/880862017/Pathfinder-Python-concept-to-Creation",
    },
    year: 2025,
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "AI/ML",
  "Data Science",
  "Other",
] as const;
