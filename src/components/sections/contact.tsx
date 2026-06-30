"use client";

import { useState } from "react";
import { Mail, Copy, Check, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { BrandIcon } from "@/components/ui/brand-icon";
import { profile, socials } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have a role, project, or idea in mind? Reach out directly — my inbox is always open."
      />

      <div className="mx-auto w-full max-w-xl">
        <Card className="text-center">
          <h3 className="font-display text-xl font-semibold">Reach me at</h3>
          <p className="mt-1 text-sm text-muted">
            The fastest way to get in touch.
          </p>

          <button
            onClick={copyEmail}
            className="mt-6 flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm transition-colors hover:border-accent/40"
          >
            <span className="flex min-w-0 items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate">{profile.email}</span>
            </span>
            {copied ? (
              <span className="flex shrink-0 items-center gap-1 text-xs text-success">
                <Check className="h-4 w-4" /> Copied
              </span>
            ) : (
              <Copy className="h-4 w-4 shrink-0 text-subtle" />
            )}
          </button>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> {profile.phone}
            </a>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:text-accent"
              >
                <BrandIcon slug={s.slug} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
