import type React from 'react';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import './reset.css';
import styles from './mainLayout.module.scss';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'List of best movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className={styles.mainLayoutWrapper}>{children}</div>
      </body>
    </html>
  );
}
