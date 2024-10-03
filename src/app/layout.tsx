import type { Metadata } from "next";
import { Raleway, Unbounded } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Skelya Careers",
  description: "Skelya Careers",
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
      </body>
    </html>
  );
}
