"use client";

import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { BrandIcon } from "@/components/ui/brand-icon";
import { codingProfiles } from "@/data/achievements";

export function CodingProfiles() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-8">
      <Reveal stagger>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((p) => (
            <RevealItem key={p.platform}>
              <a href={p.url} target="_blank" rel="noreferrer">
                <Card className="group h-full hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                      <BrandIcon slug={p.slug} className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">
                    {p.platform}
                  </h3>
                  <p className="text-sm text-subtle">@{p.username}</p>
                  {p.stats && (
                    <div className="mt-4 flex gap-4">
                      {p.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-display text-lg font-bold text-accent">
                            {s.value}
                          </p>
                          <p className="text-xs text-subtle">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </a>
            </RevealItem>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
