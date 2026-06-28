"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Trophy,
  Github,
  Mail,
  FileDown,
  Moon,
  Sun,
  Copy,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navItems, profile, socials } from "@/data/profile";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  const navIcons: Record<string, React.ReactNode> = {
    Home: <Home className="h-4 w-4" />,
    About: <User className="h-4 w-4" />,
    Skills: <Sparkles className="h-4 w-4" />,
    Projects: <FolderGit2 className="h-4 w-4" />,
    Experience: <Briefcase className="h-4 w-4" />,
    Achievements: <Trophy className="h-4 w-4" />,
    GitHub: <Github className="h-4 w-4" />,
    Contact: <Mail className="h-4 w-4" />,
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/40 p-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg"
          >
            <Command className="glass overflow-hidden rounded-2xl border border-glass-border shadow-soft">
              <Command.Input
                placeholder="Type a command or search…"
                className="w-full border-b border-border bg-transparent px-5 py-4 text-sm outline-none placeholder:text-subtle"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-subtle">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="px-2 text-xs font-medium text-subtle [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  {navItems.map((item) => (
                    <Item key={item.href} onSelect={() => go(item.href)}>
                      {navIcons[item.label]}
                      {item.label}
                    </Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="px-2 text-xs font-medium text-subtle [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  <Item
                    onSelect={() => {
                      setOpen(false);
                      window.open(profile.resumeUrl, "_blank");
                    }}
                  >
                    <FileDown className="h-4 w-4" />
                    Download Resume
                  </Item>
                  <Item
                    onSelect={() => {
                      navigator.clipboard.writeText(profile.email);
                      setOpen(false);
                    }}
                  >
                    <Copy className="h-4 w-4" />
                    Copy Email
                  </Item>
                  <Item
                    onSelect={() => {
                      setTheme(resolvedTheme === "dark" ? "light" : "dark");
                    }}
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                    Toggle Theme
                  </Item>
                </Command.Group>

                <Command.Group
                  heading="Socials"
                  className="px-2 text-xs font-medium text-subtle [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  {socials.map((s) => (
                    <Item key={s.href} onSelect={() => go(s.href)}>
                      <Mail className="h-4 w-4" />
                      {s.label}
                    </Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors data-[selected=true]:bg-accent/10 data-[selected=true]:text-accent"
    >
      {children}
    </Command.Item>
  );
}
