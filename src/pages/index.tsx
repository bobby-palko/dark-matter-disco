import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const pageStyles = {
  backgroundColor: '#121212',
  color: '#66c2e3',
  width: '100vw',
  height: '100vh',
  padding: 96,
  fontFamily: 'Roboto, sans-serif, serif',
};
const headingStyles = {
  fontSize: '64px',
};

const IndexPage: React.FC<PageProps> = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>Dark Matter Disco 🪩</h1>
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
