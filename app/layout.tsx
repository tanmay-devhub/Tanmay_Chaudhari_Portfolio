import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanmay Chaudhari — AI & Software Engineer",
  description:
    "Tanmay Chaudhari is a Software Engineer specializing in AI systems, backend infrastructure, and full-stack products. MS Computer Science student at Cal State Fullerton, graduating May 2026.",
  keywords: [
    "Tanmay Chaudhari",
    "Software Engineer",
    "AI Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "New Grad SWE",
    "CSUF",
    "Cal State Fullerton",
    "Next.js",
    "React",
    "Go",
    "Python",
    "LLM",
    "Distributed Systems",
  ],
  authors: [{ name: "Tanmay Chaudhari" }],
  creator: "Tanmay Chaudhari",
  metadataBase: new URL("https://tanmaychaudhari.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanmaychaudhari.vercel.app",
    title: "Tanmay Chaudhari — AI & Software Engineer",
    description:
      "Building production-grade AI applications and distributed backend infrastructure. MS CS @ CSUF, graduating May 2026.",
    siteName: "Tanmay Chaudhari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Chaudhari — AI & Software Engineer",
    description:
      "Building production-grade AI applications and distributed backend infrastructure. MS CS @ CSUF, graduating May 2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
