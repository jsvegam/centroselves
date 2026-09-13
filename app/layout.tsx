import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from 'next/font/google';
import "./globals.css";

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const heading = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Centro Selves - Psicoterapia Sistémica Relacional",
  description: "Centro de psicoterapia sistémica relacional en Chile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body text-foreground bg-background">{children}</body>
    </html>
  );
}
