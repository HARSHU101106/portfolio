"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectCard } from "@/components/sections/project-card";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured work"
        description="A selection of projects where design, engineering, and AI come together."
      />

      {/* Controls */}
      <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                category === cat
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "glass text-muted hover:text-accent",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="glass flex w-full items-center gap-2 rounded-full px-4 py-2 sm:w-64">
          <Search className="h-4 w-4 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-subtle"
          />
        </div>
      </div>

      <LayoutGroup>
        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">
          No projects match your search.
        </p>
      )}
    </Section>
  );
}
