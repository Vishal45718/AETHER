import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETHER | The Interface Between Thought and Creation",
  description: "An AI-native operating system for creative intelligence. Built for those who create.",
  keywords: ["AI", "intelligence", "operating system", "creative"],
  openGraph: {
    title: "AETHER",
    description: "The interface between thought and creation.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ background: "#050505", color: "#F5F1E8" }}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#050505", cursor: "none" }}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
