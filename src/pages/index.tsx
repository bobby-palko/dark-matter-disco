import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading } from '../components';

const IndexPage: React.FC<PageProps> = () => (
  <main className="h-lvh w-lvh bg-neutral-dark p-20">
    <div className="m-auto">
      <Heading>Dark Matter Disco</Heading>
    </div>
  </main>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
