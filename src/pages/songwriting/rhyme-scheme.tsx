import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, Link, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Rhyme Scheme</Heading>
    <List>
      <li>
        <Link to="/songwriting/number-of-lines">Number of Lines</Link> and{' '}
        <Link to="/songwriting/line-length">Line Length</Link> cooperate well
        together to create stability/instability
      </li>
      <li>
        create roadmap for your ear (songs are heard, not seen)
        <List>
          <li>
            stable rhyme schemes
            <List>
              <li>
                most stable, 2 equal length lines that rhyme (couplet) [AABB]
                <List>
                  <li>rhyming adding stability, not rhyming add instability</li>
                  <li>“full stop”</li>
                  <li>
                    using too many, “the steady diet of the song,” makes the
                    song feel much longer
                  </li>
                </List>
              </li>
              <li>
                ABAB
                <List>
                  <li>
                    creates momentum for the 4 line groups instead of sharing
                    power with 2nd line in AABB format
                  </li>
                </List>
              </li>
              <li>
                4 line sequence, long line - short line - long line - short line
                [xAxA]
                <List>
                  <li>can rhyme 1 & 3 and 2 & 4</li>
                </List>
              </li>
            </List>
          </li>
          <li>
            unstable rhyme scheme
            <List>
              <li>
                4 line sequence [xxAA]
                <List>
                  <li>expect rhyme 2 & 4, gets 3 & 4 instead</li>
                  <li>can make 4th line longer to create spotlight</li>
                </List>
              </li>
              <li>
                ABBA is really unstable, wants to move forward
                <List>
                  <li>
                    listener doesn't really pick up on the retrograde, wants
                    ABBABB or ABBACC
                  </li>
                  <li>
                    feeling of not quite landing - missing something, longing
                    for something, more coming?
                  </li>
                </List>
              </li>
            </List>
          </li>
        </List>
      </li>
      <li>
        above examples just paradigms, there are many many more rhyme schemes!
      </li>
    </List>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
