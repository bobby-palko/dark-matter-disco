import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="six-best-friends-who-what-when-where-why-how">
      Six Best Friends - Who What When Where Why How
    </h1>
    <ul>
      <li>
        whats my central idea
        <ul>
          <li>find it at earliest possible convenience</li>
          <li>don't just start something to see where it goes</li>
        </ul>
      </li>
      <li>
        use to explore <Link to="/songwriting/boxes">Boxes</Link>
      </li>
      <li>“who when and where” most important</li>
      <li>
        <p>“what” pretty important too</p>
      </li>
      <li>
        <p>Who is talking?</p>
      </li>
      <li>To whom?</li>
      <li>Why?</li>
      <li>When is this conversation or event taking place?</li>
      <li>Where is this conversation or event taking place?</li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
