import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type IconType =
  | ComponentType<LucideProps>
  | ComponentType<{ className?: string }>;

export type ProjectCategory = "Full Stack" | "AI/ML" | "Data Science" | "Other";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  featured?: boolean;
  metric?: { label: string; value: string };
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
    download?: string;
  };
  image?: string;
  year: number;
}

export interface SkillGroup {
  title: string;
  icon: IconType;
  skills: { name: string; level: number }[];
}

export interface TechItem {
  name: string;
  /** simple-icons slug, e.g. "react" */
  slug: string;
  color?: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  description: string;
  highlights?: string[];
  type: "experience" | "education";
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon?: IconType;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  slug: string;
  stats?: { label: string; value: string }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  slug: string;
}
