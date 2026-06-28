"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { profile, socials } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/brand-icon";

export function Hero() {
  const reduce = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setTitleIndex((i) => (i + 1) % profile.titles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          {profile.available && (
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for opportunities
            </span>
          )}

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            <br />
            <span className="text-foreground">I&apos;m a </span>
            <span className="relative inline-block">
              <motion.span
                key={titleIndex}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-gradient"
              >
                {profile.titles[titleIndex]}
              </motion.span>
            </span>
          </h1>

          <p className="max-w-xl text-lg text-muted">{profile.tagline}</p>

          <div className="flex items-center gap-2 text-sm text-subtle">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <FileDown className="h-4 w-4" /> Resume
              </a>
            </Button>
            <div className="ml-1 flex items-center gap-2">
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
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-xs lg:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] opacity-20 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border shadow-glow">
            <Image
              src={profile.avatar}
              alt={profile.fullName}
              fill
              priority
              sizes="(min-width: 1024px) 20rem, 0px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-subtle sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="h-10 w-6 rounded-full border-2 border-border p-1">
          <motion.span
            animate={reduce ? {} : { y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="block h-2 w-1.5 rounded-full bg-accent"
          />
        </span>
      </motion.div>
    </section>
  );
}
