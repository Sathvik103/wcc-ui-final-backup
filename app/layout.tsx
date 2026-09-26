import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ff5f40",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Winter Coding Contest 6.0 — Redesign Concept",
  description:
    "A national algorithmic arena. Two rounds, one campus finale, and a pipeline built to find India's sharpest problem-solvers. Round 1 is 100% Free on HackerRank.",
  keywords: [
    "Winter Coding Contest",
    "WCC 6.0",
    "ACM VNRVJIET",
    "VNRVJIET",
    "Competitive Programming",
    "Hackathon",
    "Data Structures",
    "Algorithms",
    "HackerRank",
    "Unstop",
    "Hyderabad Coding Contest",
  ],
  authors: [{ name: "ACM VNRVJIET Student Chapter", url: "https://vnrvjiet.acm.org" }],
  creator: "ACM VNRVJIET",
  publisher: "ACM VNRVJIET",
  metadataBase: new URL("https://vnrvjiet.acm.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
    description:
      "A national algorithmic arena. Two rounds, one campus finale, and a pipeline built to find India's sharpest problem-solvers.",
    url: "https://vnrvjiet.acm.org/wcc",
    siteName: "ACM VNRVJIET WCC 6.0",
    images: [
      {
        url: "/assets/images/poster_5_0.jpg",
        width: 1080,
        height: 1350,
        alt: "Winter Coding Contest 6.0 Official Poster",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/assets/images/acm_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#f5f3ee] text-[#1a1918] font-sans overflow-x-hidden selection:bg-[#ff5f40] selection:text-white">
        {children}
      </body>
    </html>
  );
}
