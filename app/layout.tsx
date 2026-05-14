import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://audaxventures.ca"),
  title: {
    default: "Audax Ventures — Canada's Leading Software Development Company",
    template: "%s | Audax Ventures",
  },
  description:
    "Audax Ventures helps startup founders and enterprise innovation teams build MVPs and scalable SaaS products. Book a free strategy call today.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://audaxventures.ca",
    siteName: "Audax Ventures",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Audax Ventures" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@audaxventures",
  },
  icons: {
    icon: "/audax-icon.png",
    apple: "/audax-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)] bg-white text-[#1A1A2E]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
