import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, Link, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Six Best Friends - Who What When Where Why How</Heading>
    <List>
      <li>
        whats my central idea
        <List>
          <li>find it at earliest possible convenience</li>
          <li>don't just start something to see where it goes</li>
        </List>
      </li>
      <li>
        use to explore <Link to="/songwriting/boxes">Boxes</Link>
      </li>
      <li>“who when and where” most important</li>
      <li>“what” pretty important too</li>
      <li>Who is talking?</li>
      <li>To whom?</li>
      <li>Why?</li>
      <li>When is this conversation or event taking place?</li>
      <li>Where is this conversation or event taking place?</li>
    </List>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
