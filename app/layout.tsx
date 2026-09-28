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
  title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
  description:
    "ACM VNRVJIET presents Winter Coding Contest 6.0: two rounds, one campus finale, and a national challenge for India's sharpest problem-solvers. Round 1 is free on HackerEarth.",
  keywords: [
    "Winter Coding Contest",
    "WCC 6.0",
    "ACM VNRVJIET",
    "VNRVJIET",
    "Competitive Programming",
    "Hackathon",
    "Data Structures",
    "Algorithms",
    "HackerEarth",
    "Unstop",
    "Hyderabad Coding Contest",
  ],
  authors: [{ name: "ACM VNRVJIET Student Chapter", url: "https://vnrvjiet.acm.org" }],
  creator: "ACM VNRVJIET",
  publisher: "ACM VNRVJIET",
  metadataBase: new URL("https://wcc6.pages.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
    description:
      "ACM VNRVJIET presents Winter Coding Contest 6.0: two rounds, one campus finale, and a national challenge for India's sharpest problem-solvers.",
    url: "https://wcc6.pages.dev/",
    siteName: "Winter Coding Contest 6.0",
    images: [
      {
        url: "/acm-vnrvjiet-logo.png",
        width: 1024,
        height: 1024,
        alt: "ACM VNRVJIET logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Coding Contest 6.0 | ACM VNRVJIET",
    description:
      "ACM VNRVJIET presents Winter Coding Contest 6.0: two rounds, one campus finale, and a national challenge for India's sharpest problem-solvers.",
    images: ["/acm-vnrvjiet-logo.png"],
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
