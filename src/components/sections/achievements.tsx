"use client";

import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Highlights"
        title="Achievements"
        description="Milestones, wins, and recognition along the way."
      />
      <Reveal stagger>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.title}>
                <Card className="group relative h-full overflow-hidden hover:-translate-y-1 hover:shadow-glow">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-all group-hover:scale-150" />
                  <div className="relative flex items-start gap-4">
                    {Icon && (
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--accent),var(--accent-3))] text-accent-foreground">
                        <Icon className="h-6 w-6" />
                      </span>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-xs text-subtle">{item.date}</span>
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
