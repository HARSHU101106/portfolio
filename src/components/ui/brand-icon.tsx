import {
  SiGithub,
  SiGmail,
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiGeeksforgeeks,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiVercel,
  SiFigma,
  SiJupyter,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiOpencv,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiCanva,
  SiOpenjdk,
} from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

const map: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  gmail: SiGmail,
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  hackerrank: SiHackerrank,
  geeksforgeeks: SiGeeksforgeeks,
  typescript: SiTypescript,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  nodedotjs: SiNodedotjs,
  python: SiPython,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  git: SiGit,
  vercel: SiVercel,
  figma: SiFigma,
  jupyter: SiJupyter,
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  bootstrap: SiBootstrap,
  opencv: SiOpencv,
  streamlit: SiStreamlit,
  pandas: SiPandas,
  numpy: SiNumpy,
  scikitlearn: SiScikitlearn,
  canva: SiCanva,
  openjdk: SiOpenjdk,
};

export function BrandIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = map[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}
