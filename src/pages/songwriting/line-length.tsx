import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, List } from '../../components';

const SongwritingLineLengthPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Line Length</Heading>
    <List>
      <li>two lines match length = stable. we're done, we can move on</li>
      <li>
        shorter 2nd line helps move forward = unstable. OMG WE GOTTA GO NOW
      </li>
      <li>
        dance between line lengths, don't need to stick to one or the other
      </li>
      <li>
        longer 2nd line is still instability, but it creates the spotlight, not
        quite the moving forward part
        <List>
          <li>
            balanced the first line then added extra - doesn't feel really
            unstable
          </li>
        </List>
      </li>
      <li>
        Effects of line length
        <List>
          <li>
            can create an “emotional commentary”
            <List>
              <li>
                shortening last line leaves longing, cause you were expecting it
                to be the same as the others
              </li>
            </List>
          </li>
          <li>breaking expectations to create that unstable feeling</li>
          <li>
            making second short, and fourth longer, creates spotlight on that
            4th line
          </li>
          <li>listener wants 4th to be same length as 2nd</li>
          <li>can unbalance something by using extra line length</li>
          <li>match unstable sections together (repeat) to create stability</li>
          <li>
            create contrast between sections (long lines in verse, short in
            chorus)
          </li>
        </List>
      </li>
    </List>
  </main>
);

export default SongwritingLineLengthPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
