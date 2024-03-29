import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { GradientText, Heading, Link, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>
      <GradientText>Songwriting Theory</GradientText>
    </Heading>
    <List>
      <li>
        <Link to="/songwriting/pov">Point of View</Link>
      </li>
      <li>
        <Link to="/songwriting/boxes">Boxes</Link>
      </li>
      <li>
        <Link to="/songwriting/six-best-friends">Six Best Friends</Link>
      </li>
      <li>
        <Link to="/songwriting/song-form">Song Form</Link>
      </li>
      <li>
        <Link to="/songwriting/prosody">Rule of Prosody</Link>
      </li>
      <li>
        <Link to="/songwriting/number-of-lines">Number of Lines</Link>
      </li>
      <li>
        <Link to="/songwriting/line-length">Line Length</Link>
      </li>
      <li>
        <Link to="/songwriting/rhyme-scheme">Rhyme Scheme</Link>
      </li>
      <li>
        <Link to="/songwriting/melody">Melody and Harmony</Link>
      </li>
      <li>
        <Link to="/songwriting/rhyme-types">Rhyme Types</Link>
      </li>
      <li>
        <Link to="/songwriting/move">Making it Move</Link>
      </li>
      <li>
        <Link to="/songwriting/hobo-wind">Hobo Wind</Link>
      </li>
      <li>
        <Link to="/songwriting/body-language">Body Language</Link>
      </li>
    </List>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
