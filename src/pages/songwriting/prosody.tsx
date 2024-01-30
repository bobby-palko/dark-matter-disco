import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Rule of Prosody</Heading>
    <p>
      <em>Unity</em>
    </p>
    <List>
      <li>
        Everything fits together, works together
        <List>
          <li>express central emotion</li>
          <li>all there for the same reason</li>
        </List>
      </li>
      <li>Common sense, duh!</li>
      <li>Rule of all art basically</li>
      <li>
        Stable vs unstable ideas (like a fact vs something's missing)
        <List>
          <li>“Im so grateful that you're in my life” (stable)</li>
          <li>
            “I wish you here!” (sense of longing, something not there….unstable)
          </li>
          <li>
            Tone of voice help create this stability or instability{' '}
            <List>
              <li>
                “I'm so grateful that you're in my life….but..” (unstable!)
              </li>
            </List>
          </li>
          <li>
            Unusual for entire song to stay one way
            <List>
              <li>
                Common for song to go from stable to unstable, or other way, or
                both!
              </li>
            </List>
          </li>
        </List>
      </li>
    </List>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
