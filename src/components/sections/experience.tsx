"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import type { TimelineItem } from "@/types";
import { experience, education } from "@/data/experience";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative ml-3 border-l border-border pl-8">
      {items.map((item, i) => (
        <motion.div
          key={`${item.title}-${i}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08 }}
          className="relative mb-8 last:mb-0"
        >
          <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full border border-accent/30 bg-background text-accent">
            {item.type === "experience" ? (
              <Briefcase className="h-3 w-3" />
            ) : (
              <GraduationCap className="h-3 w-3" />
            )}
          </span>
          <Card className="hover:-translate-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg font-semibold">
                {item.title}
              </h3>
              {(item.start || item.end) && (
                <span className="rounded-full bg-accent/5 px-3 py-0.5 text-xs font-medium text-accent">
                  {item.start && item.end
                    ? `${item.start} — ${item.end}`
                    : item.start || item.end}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-muted">
              {item.organization}
              {item.location && (
                <span className="text-subtle"> · {item.location}</span>
              )}
            </p>
            <p className="mt-3 text-sm text-foreground/80">
              {item.description}
            </p>
            {item.highlights && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="The roles, internships, and learning that shaped how I build."
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <Briefcase className="h-5 w-5 text-accent" /> Experience
          </h3>
          <Timeline items={experience} />
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold">
            <GraduationCap className="h-5 w-5 text-accent" /> Education
          </h3>
          <Timeline items={education} />
        </div>
      </div>
    </Section>
  );
}
