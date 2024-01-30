import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="line-length">Line Length</h1>
    <ul>
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
        <ul>
          <li>
            balanced the first line then added extra - doesn't feel really
            unstable
          </li>
        </ul>
      </li>
      <li>
        Effects of line length
        <ul>
          <li>
            can create an “emotional commentary”
            <ul>
              <li>
                shortening last line leaves longing, cause you were expecting it
                to be the same as the others
              </li>
            </ul>
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
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
