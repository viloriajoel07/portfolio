import Head from "next/head";
import "./globals.css";
import { Navigation } from "~/components";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Viloria Dev</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LLEPPZH4M9"
      ></script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-LLEPPZH4M9');
          `}
      </Script>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-r from-slate-900 to-slate-950 relative">
          <div className="flex w-full flex-col justify-center text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
