import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrismaTech | No tricks. Just smarter payments.",
  description:
    "Get your business ready for the seasonal rush with PrismaTech merchant services. Explore Clover Flex, Clover Mini and NRS Petro POS solutions.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b080f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-backdrop.webp"
          type="image/webp"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
