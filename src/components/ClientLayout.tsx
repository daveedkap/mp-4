"use client";
import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: rgb(140, 194, 229);
`;

const StyledMain = styled.main`
  margin: 2rem;
`;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledHeader>
        <h1>Harvard Art Museums</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </StyledHeader>
      <StyledMain>
        {children}
      </StyledMain>
    </>
  );
}
