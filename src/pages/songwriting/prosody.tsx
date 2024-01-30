import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="rule-of-prosody">Rule of Prosody</h1>
    <p>
      <em>Unity</em>
    </p>
    <ul>
      <li>
        Everything fits together, works together
        <ul>
          <li>express central emotion</li>
          <li>all there for the same reason</li>
        </ul>
      </li>
      <li>Common sense, duh!</li>
      <li>Rule of all art basically</li>
      <li>
        Stable vs unstable ideas (like a fact vs something's missing)
        <ul>
          <li>“Im so grateful that you're in my life” (stable)</li>
          <li>
            “I wish you here!” (sense of longing, something not there….unstable)
          </li>
          <li>
            Tone of voice help create this stability or instability{' '}
            <ul>
              <li>
                “I'm so grateful that you're in my life….but..” (unstable!)
              </li>
            </ul>
          </li>
          <li>
            Unusual for entire song to stay one way
            <ul>
              <li>
                Common for song to go from stable to unstable, or other way, or
                both!
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
