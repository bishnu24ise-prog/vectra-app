import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vectra | Automate at the speed of thought",
  description: "The next-generation AI platform that transforms your raw data into automated workflows instantly. No coding required.",
  keywords: ["AI", "Automation", "Workflows", "Data Pipeline", "Enterprise"],
  authors: [{ name: "Vectra Inc" }],
  openGraph: {
    title: "Vectra | Automate at the speed of thought",
    description: "The next-generation AI platform that transforms your raw data into automated workflows instantly.",
    url: "https://vectra.ai",
    siteName: "Vectra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectra | Automate at the speed of thought",
    description: "The next-generation AI platform that transforms your raw data into automated workflows instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased min-h-screen flex flex-col selection:bg-[var(--color-primary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
