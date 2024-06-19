import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.HOST_APP_URL}`),
  title: 'Cupid Meter',
  description: 'Cek tingkat kecocokan cintamu dengan crush atau pasanganmu',
  keywords: ['Cupid', 'Meter', 'Calculator', 'Love'],
  authors: [{ name: 'Maruu', url: 'https://maruhodo.id' }],
  creator: 'Maruu',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Cupid Meter',
    description: 'Cek tingkat kecocokan cintamu dengan crush atau pasanganmu',
    url: `${process.env.HOST_APP_URL}/`,
    siteName: 'Cupid Meter',
    images: [
      {
        url: `${process.env.HOST_APP_URL}/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'Cupid Meter',
    title: "Cupid Meter',",
    description: "Cek tingkat kecocokan cintamu dengan crush atau pasanganmu",
    creator: 'Cupid Meter',
    images: {
      url: `${process.env.HOST_APP_URL}/og.png`,
      alt: 'Preview image for Cupid Meter',
    }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
