import type { Metadata } from "next";
import { Raleway, Unbounded } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: '--font-unbounded',
  // weight: ['400', '500', '600', '700', '800', '900'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skelya Careers",
  description: "Skelya Careers",
  metadataBase: new URL('http://skelya.careers'),
  keywords:[''],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${unbounded.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
