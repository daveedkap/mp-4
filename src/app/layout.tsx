// src/app/layout.tsx
import '../styles/globals.css'; 
import styles from '../styles/layout.module.css';
import Link from 'next/link';


export const metadata = {
  title: 'Harvard Art Museums',
  description: 'Browse art from the Harvard collection',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={styles.body}>
        <header className={styles.header}>
          <h1 className={styles.title}>Harvard Art Museums</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
