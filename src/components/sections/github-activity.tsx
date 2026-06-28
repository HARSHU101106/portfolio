import { Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { getGithubContributions } from "@/lib/github";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const levelClass: Record<number, string> = {
  0: "bg-foreground/[0.06]",
  1: "bg-accent/30",
  2: "bg-accent/50",
  3: "bg-accent/75",
  4: "bg-accent",
};

export async function GithubActivity() {
  const data = await getGithubContributions();

  return (
    <Section id="github">
      <SectionHeading
        eyebrow="Activity"
        title="GitHub Contributions"
        description="My open-source rhythm — consistency over intensity."
      />

      <Card className="overflow-hidden">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
              <Github className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold">
                @{profile.githubUsername}
              </p>
              <p className="text-sm text-muted">
                {data.ok
                  ? `${data.total.toLocaleString()} contributions in the last year`
                  : "Live contribution data"}
              </p>
            </div>
          </div>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            View Profile
          </a>
        </div>

        {data.ok ? (
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1">
              {data.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <span
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className={cn(
                        "h-3 w-3 rounded-[3px] transition-transform hover:scale-125",
                        levelClass[day.level],
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-subtle">
              Less
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className={cn("h-3 w-3 rounded-[3px]", levelClass[l])}
                />
              ))}
              More
            </div>
          </div>
        ) : (
          <p className="py-8 text-center text-sm text-muted">
            Contribution graph will appear once a valid GitHub username is set.
          </p>
        )}
      </Card>
    </Section>
  );
}
