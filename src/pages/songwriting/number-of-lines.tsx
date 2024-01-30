import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="number-of-lines">Number of Lines</h1>
    <ul>
      <li>
        every section of song will have some number of lines, duh
        <ul>
          <li>
            even number feels stable
            <ul>
              <li>4 is a very stable amount</li>
            </ul>
          </li>
          <li>
            odd feels unstable, unresolved{' '}
            <ul>
              <li>
                3 feels like it needs to move forward, “one line is missing”
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        number of lines creates feeling all by itself
        <ul>
          <li>can be used to support feelings talking about</li>
          <li>talk in a rhythm to get feeling (like to a simple loop)</li>
        </ul>
      </li>
      <li>
        Effects of number of lines
        <ul>
          <li>actually think about these things rather than let it happen</li>
          <li>
            create “spotlights”
            <ul>
              <li>
                resolving position is a brighter spotlight (position of
                stability, affirming expectations)
              </li>
              <li>
                unexpected areas (verse 4 lines, verse 4 lines, verse 5 LINES)
              </li>
            </ul>
          </li>
          <li>
            create stopping motion/suggesting forward motion
            <ul>
              <li>even = I’m done. stop motion</li>
              <li>
                odd = let’s keep going? move forward
                <ul>
                  <li>
                    odd typically used in section made to create motion
                    <ul>
                      <li>pre chorus, bridge, etc</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            create contrast between sections
            <ul>
              <li>it's not a big player in creating contrast, but is useful</li>
              <li>creates spotlight</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
