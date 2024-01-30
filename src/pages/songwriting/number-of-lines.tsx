import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, List } from '../../components';

const SongwritingNumberOfLinesPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Number of Lines</Heading>
    <List>
      <li>
        every section of song will have some number of lines, duh
        <List>
          <li>
            even number feels stable
            <List>
              <li>4 is a very stable amount</li>
            </List>
          </li>
          <li>
            odd feels unstable, unresolved{' '}
            <List>
              <li>
                3 feels like it needs to move forward, “one line is missing”
              </li>
            </List>
          </li>
        </List>
      </li>
      <li>
        number of lines creates feeling all by itself
        <List>
          <li>can be used to support feelings talking about</li>
          <li>talk in a rhythm to get feeling (like to a simple loop)</li>
        </List>
      </li>
      <li>
        Effects of number of lines
        <List>
          <li>actually think about these things rather than let it happen</li>
          <li>
            create “spotlights”
            <List>
              <li>
                resolving position is a brighter spotlight (position of
                stability, affirming expectations)
              </li>
              <li>
                unexpected areas (verse 4 lines, verse 4 lines, verse 5 LINES)
              </li>
            </List>
          </li>
          <li>
            create stopping motion/suggesting forward motion
            <List>
              <li>even = I'm done. stop motion</li>
              <li>
                odd = let's keep going? move forward
                <List>
                  <li>
                    odd typically used in section made to create motion
                    <List>
                      <li>pre chorus, bridge, etc</li>
                    </List>
                  </li>
                </List>
              </li>
            </List>
          </li>
          <li>
            create contrast between sections
            <List>
              <li>it's not a big player in creating contrast, but is useful</li>
              <li>creates spotlight</li>
            </List>
          </li>
        </List>
      </li>
    </List>
  </main>
);

export default SongwritingNumberOfLinesPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
