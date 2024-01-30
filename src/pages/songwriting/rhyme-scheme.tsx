import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="rhyme-scheme">Rhyme Scheme</h1>
    <ul>
      <li>
        <Link to="/songwriting/number-of-lines">Number of Lines</Link> and{' '}
        <Link to="/songwriting/line-length">Line Length</Link> cooperate well
        together to create stability/instability
      </li>
      <li>
        <p>create roadmap for your ear (songs are heard, not seen)</p>
        <ul>
          <li>
            stable rhyme schemes
            <ul>
              <li>
                most stable, 2 equal length lines that rhyme (couplet) [AABB]
                <ul>
                  <li>rhyming adding stability, not rhyming add instability</li>
                  <li>“full stop”</li>
                  <li>
                    using too many, “the steady diet of the song,” makes the
                    song feel much longer
                  </li>
                </ul>
              </li>
              <li>
                ABAB
                <ul>
                  <li>
                    creates momentum for the 4 line groups instead of sharing
                    power with 2nd line in AABB format
                  </li>
                </ul>
              </li>
              <li>
                4 line sequence, long line - short line - long line - short line
                [xAxA]
                <ul>
                  <li>can rhyme 1 & 3 and 2 & 4</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            unstable rhyme scheme
            <ul>
              <li>
                4 line sequence [xxAA]
                <ul>
                  <li>expect rhyme 2 & 4, gets 3 & 4 instead</li>
                  <li>can make 4th line longer to create spotlight</li>
                </ul>
              </li>
              <li>
                ABBA is really unstable, wants to move forward
                <ul>
                  <li>
                    listener doesn't really pick up on the retrograde, wants
                    ABBABB or ABBACC
                  </li>
                  <li>
                    feeling of not quite landing - missing something, longing
                    for something, more coming?
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>
          above examples just paradigms, there are many many more rhyme schemes!
        </p>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
