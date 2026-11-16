import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteProvider } from "@/components/SiteProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theosoprojects.online"),
  title: {
    default: "TOP Agency — High-performance digital infrastructure and remote teams",
    template: "%s — TOP Agency",
  },
  description:
    "TOP Agency engineers custom websites, mobile and web platforms, and pre-vetted senior remote developers for growing organizations.",
  applicationName: "TOP Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <div className="site-atmosphere" aria-hidden="true">
          <div className="site-orb site-orb-a" />
          <div className="site-orb site-orb-b" />
          <div className="site-orb site-orb-c" />
          <div className="site-grid" />
        </div>
        <div className="relative z-10">
          <SiteProvider>{children}</SiteProvider>
        </div>
      </body>
    </html>
  );
}
