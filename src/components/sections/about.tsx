"use client";

import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        description="Engineer at heart, designer by instinct, lifelong learner by choice."
      />

      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <Card className="h-full">
            <p className="text-lg leading-relaxed text-foreground/90">
              {profile.bio}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2">
              {profile.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-border bg-foreground/[0.02] p-4"
                >
                  <p className="text-xs uppercase tracking-wide text-subtle">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal className="md:col-span-2" stagger>
          <div className="grid h-full grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <Card
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 text-center"
              >
                <span className="font-display text-3xl font-bold text-gradient">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-muted">{stat.label}</span>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
