import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mrigasthali",
  description: "Nath Sampradaya Siddhachal Mrigasthali Ashram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}