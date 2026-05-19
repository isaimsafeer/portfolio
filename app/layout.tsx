import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saim Safeer — AI Developer & Automation Engineer",
  description:
    "Portfolio of Saim Safeer — AI Developer, Automation Engineer, Full Stack Developer, and RAG & AI Agent specialist building production-ready intelligent systems.",
  keywords: [
    "AI Developer",
    "RAG",
    "LangChain",
    "LangGraph",
    "Automation Engineer",
    "Full Stack",
    "AI Agents",
    "Python",
  ],
  openGraph: {
    title: "Saim Safeer — AI Developer & Automation Engineer",
    description:
      "Building production-ready AI systems, automation pipelines, and full-stack applications.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
