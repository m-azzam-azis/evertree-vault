import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // Import the Footer component
import "./globals.css";
import "@fontsource/ibm-plex-mono";
import "@fontsource/vt323";

export const metadata: Metadata = {
  title: "EverTree Vault",
  description:
    "Evertree is a decentralized knowledge base that ensures information remains uncensorable, permanent, verifiable, and accessible.",
  keywords: [
    "decentralized",
    "ICP",
    "Web3",
    "digital vault",
    "asset management",
  ],
  authors: [{ name: "Azzam" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
