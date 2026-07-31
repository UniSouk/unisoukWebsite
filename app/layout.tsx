import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SITE_URL } from "@/constants/site";

import "./globals.css";
import "./native-foundations.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UniSouk | List. Sell. Grow.",
    template: "%s | UniSouk",
  },
  description:
    "List better, sell across marketplaces and storefronts, and grow with one commerce platform built for Indian sellers.",
  icons: {
    icon: "/unisouk-logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
