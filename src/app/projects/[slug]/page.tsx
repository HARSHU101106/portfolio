import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { Tag, Badge } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Badge>{project.category}</Badge>
        <span className="text-sm text-subtle">{project.year}</span>
      </div>

      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.demo && (
          <Button asChild>
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              Live Demo <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.links.github && (
          <Button asChild variant="secondary">
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> Source
            </a>
          </Button>
        )}
        {project.links.download && (
          <Button asChild variant="secondary">
            <a href={project.links.download} target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" /> Download App
            </a>
          </Button>
        )}
      </div>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,var(--accent)/0.15,var(--accent-3)/0.15)]">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="prose-portfolio mt-10 space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-muted">{project.description}</p>
        </section>

        {project.metric && (
          <section>
            <h2 className="font-display text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-muted">
              <span className="font-semibold text-accent">
                {project.metric.value}
              </span>{" "}
              {project.metric.label}
            </p>
          </section>
        )}

        <section>
          <h2 className="font-display text-xl font-semibold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
