"use client";

import { ArrowUp } from "lucide-react";
import { navItems, profile, socials } from "@/data/profile";
import { BrandIcon } from "@/components/ui/brand-icon";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-xl font-bold">
              <span className="text-gradient">{profile.name}</span>
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm text-muted">{profile.tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:text-accent"
                >
                  <BrandIcon slug={s.slug} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Built with Next.js
            &amp; Tailwind.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
