import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="melody-and-harmony">Melody and Harmony</h1>
    <p>Melody - noun harmony - adjective</p>
    <p>Most resolved to least resolved, still creating tonic function:</p>
    <ul>
      <li>
        Stable, playing C maj chord (tonic chord), with bass root C, singing C
        note{' '}
      </li>
      <li>
        Bass play 5th (G), sing C, still stable, not too bad, substitute{' '}
        <ul>
          <li>5th is second overtone in chord (root C is 1st)</li>
        </ul>
      </li>
      <li>Bass play 3rd (E), sing C, little more uncomfortable</li>
      <li>
        Bass play 3rd, sing C, take C out of C chord - even more uncomfortable
      </li>
      <li>
        <p>
          Bass play 3rd, sing C (root), play Cmaj7 without C (Em) - more eehhhhh
          feeling!
        </p>
      </li>
      <li>
        <p>
          Chords played under melody affect melody and give different emotional
          resonance
        </p>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
