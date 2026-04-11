import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elkingroup.co.ke"),
  title: "Elkin Group",
  description: "Go beyond with us",
  keywords: "Elkin Group, logistics, freight, cargo, transport, Kenya",
  authors: {
    name: "Elkin Group",
    url: "https://elkingroup.co.ke",
  },
  openGraph: {
    title: "Elkin Group",
    description: "Go beyond with us",
    url: "https://elkingroup.co.ke",
    siteName: "Elkin Group",
    images: [
      {
        url: "https://elkingroup.co.ke/Elkin.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elkin Group",
    description: "Go beyond with us",
    images: ["https://elkingroup.co.ke/Elkin.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroHeader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme // Add this to prevent flash
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
