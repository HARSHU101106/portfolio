"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Card, Tag, Badge } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden p-0 hover:-translate-y-1.5 hover:shadow-glow">
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,var(--accent)/0.15,var(--accent-3)/0.15)]">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-2xl font-bold text-foreground/20">
              {project.title}
            </span>
          </div>
          {project.featured && (
            <Badge className="absolute left-3 top-3 bg-background/80 backdrop-blur">
              ★ Featured
            </Badge>
          )}
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass grid h-9 w-9 place-items-center rounded-full text-foreground hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live demo"
                className="glass grid h-9 w-9 place-items-center rounded-full text-foreground hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold">
              {project.title}
            </h3>
            <span className="text-xs text-subtle">{project.year}</span>
          </div>
          <p className="text-sm text-muted">{project.tagline}</p>

          {project.metric && (
            <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-accent/5 px-3 py-1.5 text-sm">
              <span className="font-semibold text-accent">
                {project.metric.value}
              </span>
              <span className="text-subtle">{project.metric.label}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="inline-flex items-center gap-1 font-medium text-accent hover:gap-2 transition-all"
              >
                Case study <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-foreground"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
