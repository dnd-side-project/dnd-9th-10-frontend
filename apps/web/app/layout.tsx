import Head from "next/head";

import { Metadata } from "next";

const TITLE = "DND 9-10";
const DESCRIPTION = "DND 9-10";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  applicationName: TITLE,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#000000",
  icons: {
    apple: "/icons/apple-touch-icon.png",
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/icons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/icons/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
      },
    ],
    shortcut: {
      url: "/favicon.ico",
    },
  },
  manifest: "/manifest.json",
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
    userScalable: false,
    viewportFit: "cover",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    url: "https://dnd-9th-10-frontend.vercel.app",
    images: "https://dnd-9th-10-frontend.vercel.app/icons/apple-touch-icon.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/icons/browserconfig.xml",
    "msapplication-TileColor": "#2B5797",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
