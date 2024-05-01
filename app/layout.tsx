import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const arialFont = localFont({
  src: './fonts/ARIAL.woff'
});

export const metadata: Metadata = {
  title: 'Wellness Stream',
  description: 'Wellness app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./siteLogo.png" />
      <body className={arialFont.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
