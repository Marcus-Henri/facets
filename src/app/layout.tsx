import type { Metadata } from "next";
import { Inter, Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Marcus Henri | Portfolio",
  description: "Executive Portfolio of Marcus Henri (Mark Henry Saft)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} antialiased bg-pearl-white text-deep-indigo min-h-screen flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
