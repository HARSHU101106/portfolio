import type { Metadata } from "next";
import { fontSans, fontDisplay, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Cursor } from "@/components/effects/cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command-palette";
import { profile, siteConfig } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Portfolio",
    profile.fullName,
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${profile.fullName} — ${profile.role}`,
    description: siteConfig.description,
    siteName: `${profile.name}'s Portfolio`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.role}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <AuroraBackground />
          <ScrollProgress />
          <Cursor />
          <CommandPalette />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
