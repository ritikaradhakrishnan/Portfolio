import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://ritikaradhakrishnan.com"),
    title: "ЯR",
    description:
      "Co-founder of Merit Labs and researcher in trustworthy AI, measurement-aware machine learning, sensor fusion, and cross-cohort explainability.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      url: "https://ritikaradhakrishnan.com",
      title: "Ritika Radhakrishnan — Co-Founder, Merit Labs",
      description: "Building AI-powered guidance tools to help young people across India discover their potential.",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Ritika Radhakrishnan — Co-Founder, Merit Labs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ritika Radhakrishnan — Co-Founder, Merit Labs",
      description: "Building AI-powered guidance tools to help young people across India discover their potential.",
      images: ["/og.png"],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
