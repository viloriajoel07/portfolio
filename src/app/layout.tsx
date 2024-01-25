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
      <meta
        name="description"
        content="Joel Viloria, This is my personal porfolio"
      />
      <meta
        name="description"
        content="Joel Viloria, Este es mi portafolio personal"
      />
      <meta
        name="keywords"
        content="Joel Viloria, porfolio, porfolio Joel Viloria, Proyectos Joel Viloria"
      />
      <meta name="robots" content="index, follow" />

      <body className="flex flex-col min-h-screen bg-gradient-to-r from-black to-zinc-900 overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
