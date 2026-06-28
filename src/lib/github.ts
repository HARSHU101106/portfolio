import { profile } from "@/data/profile";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubData {
  total: number;
  weeks: ContributionDay[][];
  ok: boolean;
}

/**
 * Fetches a year of contribution data from a public, token-free endpoint.
 * Cached via ISR. Degrades gracefully to an empty grid on failure.
 */
export async function getGithubContributions(
  username = profile.githubUsername,
): Promise<GithubData> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(`status ${res.status}`);

    const json = (await res.json()) as {
      total: Record<string, number>;
      contributions: { date: string; count: number; level: number }[];
    };

    const days: ContributionDay[] = json.contributions.map((c) => ({
      date: c.date,
      count: c.count,
      level: Math.min(4, Math.max(0, c.level)) as ContributionDay["level"],
    }));

    // Group into weeks (columns), aligned to weekday.
    const weeks: ContributionDay[][] = [];
    let current: ContributionDay[] = [];
    days.forEach((day) => {
      const weekday = new Date(day.date).getDay();
      if (weekday === 0 && current.length) {
        weeks.push(current);
        current = [];
      }
      current.push(day);
    });
    if (current.length) weeks.push(current);

    const total = Object.values(json.total).reduce((a, b) => a + b, 0);

    return { total, weeks, ok: true };
  } catch {
    return { total: 0, weeks: [], ok: false };
  }
}
