"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Copy, Check, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/ui/brand-icon";
import { profile, socials } from "@/data/profile";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("failed");
      } else {
        // No backend configured — open the user's email client with a
        // prefilled message so it can actually be sent.
        const subject = encodeURIComponent(
          `Portfolio enquiry from ${values.name}`,
        );
        const body = encodeURIComponent(
          `${values.message}\n\n— ${values.name} (${values.email})`,
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      }
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50 focus:bg-transparent";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have a role, project, or idea in mind? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Info */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Card>
            <h3 className="font-display text-lg font-semibold">Reach me at</h3>
            <button
              onClick={copyEmail}
              className="mt-4 flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-foreground/[0.02] px-4 py-3 text-sm transition-colors hover:border-accent/40"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                {profile.email}
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4 text-subtle" />
              )}
            </button>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </p>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="mt-2 flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> {profile.phone}
            </a>
            <div className="mt-5 flex gap-3">
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

        {/* Form */}
        <Card className="lg:col-span-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  {...register("name")}
                  className={inputCls}
                  placeholder="Jane Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-danger">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  {...register("email")}
                  className={inputCls}
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-danger">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Tell me about the opportunity…"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-danger">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
              {status === "sent" && (
                <span className="text-sm text-success">
                  Thanks! I&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-danger">
                  Something went wrong. Try email instead.
                </span>
              )}
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}
