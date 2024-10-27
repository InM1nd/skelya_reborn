import type { Metadata } from "next";
import { Raleway, Unbounded } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics  } from '@next/third-parties/google'
import Script from "next/script";

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
  keywords:[
    'Кар&apos;єрна консультація', 
    'Пошук роботи', 
    'Профорієнтація', 
    'Скеля', 
    'Skelya',
    '',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${raleway.variable} ${unbounded.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-SLW6C9CCYM" />
        <Analytics/>

        <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1254564902408772');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}



