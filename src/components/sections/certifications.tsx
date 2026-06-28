"use client";

import { ExternalLink, BadgeCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, Tag } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { certifications } from "@/data/achievements";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Verified courses and credentials that back up the skills."
      />
      <Reveal stagger>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <RevealItem key={cert.title}>
              <Card className="group h-full hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Verify credential"
                      className="text-subtle transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h3 className="mt-4 font-display font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.skills && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                )}
              </Card>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
