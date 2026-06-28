"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { BrandIcon } from "@/components/ui/brand-icon";
import { skillGroups, techStack } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        description="A versatile toolkit spanning the full stack, machine learning, and data."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Reveal key={group.title}>
            <Card className="h-full hover:-translate-y-1 hover:shadow-glow">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-subtle">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Tech marquee */}
      <div className="mt-12">
        <p className="mb-6 text-center text-sm uppercase tracking-widest text-subtle">
          Tech Stack
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max gap-4 [animation:var(--animate-marquee)] group-hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.slug}-${i}`}
                className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
              >
                <BrandIcon slug={tech.slug} className="h-4 w-4 text-accent" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
