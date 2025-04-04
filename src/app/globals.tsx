import Link from 'next/link';
import { GlobalStyle, Header, Title, Nav } from '../styles/styled-globals'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GlobalStyle />
      </head>
      <body>
        <Header>
          <Title>Harvard Art Museums</Title>
          <Nav>
            <Link href="/">Home</Link>
          </Nav>
        </Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
