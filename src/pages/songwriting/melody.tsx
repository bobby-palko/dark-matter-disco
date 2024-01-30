import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, List } from '../../components';

const SongwritingMelodyPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Melody and Harmony</Heading>
    <p>Melody - noun harmony - adjective</p>
    <p>Most resolved to least resolved, still creating tonic function:</p>
    <List>
      <li>
        Stable, playing C maj chord (tonic chord), with bass root C, singing C
        note{' '}
      </li>
      <li>
        Bass play 5th (G), sing C, still stable, not too bad, substitute{' '}
        <List>
          <li>5th is second overtone in chord (root C is 1st)</li>
        </List>
      </li>
      <li>Bass play 3rd (E), sing C, little more uncomfortable</li>
      <li>
        Bass play 3rd, sing C, take C out of C chord - even more uncomfortable
      </li>
      <li>
        Bass play 3rd, sing C (root), play Cmaj7 without C (Em) - more eehhhhh
        feeling!
      </li>
      <li>
        Chords played under melody affect melody and give different emotional
        resonance
      </li>
    </List>
  </main>
);

export default SongwritingMelodyPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
