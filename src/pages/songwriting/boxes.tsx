import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="boxes">Boxes</h1>
    <ul>
      <li>
        Keep listener interested
        <ul>
          <li>timing</li>
          <li>don’t say everything in first verse</li>
          <li>pace yourself</li>
          <li>create journey</li>
        </ul>
      </li>
      <li>
        producer mindset in energy
        <ul>
          <li>first verse low key</li>
          <li>first chorus higher</li>
          <li>second verse between first verse and chorus</li>
          <li>second chorus even higher</li>
          <li>bridge builds and builds</li>
          <li>last chorus most energy!</li>
        </ul>
      </li>
      <li>what do you want to say in the song?</li>
      <li>
        think of song structure in 3 boxes
        <ul>
          <li>
            small then medium then large
            <ul>
              <li>medium needs to hold small, large hold both</li>
            </ul>
          </li>
          <li>
            1st box, song idea - running into an ex
            <ul>
              <li>“Are you happy? I’d just like to know”</li>
            </ul>
          </li>
          <li>
            2nd box, builds off idea
            <ul>
              <li>“Did you cheat on me? I’d just like to know”</li>
              <li>
                did you know you were going to move in with him so quickly after
                us?
              </li>
              <li>did you hide the photo of us when he was there?</li>
              <li>
                I’d just like to know - gains weight now! means more the 2nd
                time around
              </li>
            </ul>
          </li>
          <li>
            3rd box, big idea, place to arrive, the why of the song
            <ul>
              <li>“All I wanted was honesty. I’d just like to know.”</li>
              <li>said we were gonna tell each other everything</li>
              <li>
                you could’ve told me about him, i wouldn’t have stopped you
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>music idea reaches climax with producer build</li>
      <li>
        not every song will do that
        <ul>
          <li>
            good for when you want listener to pay attention to what you want to
            say
          </li>
        </ul>
      </li>
      <li>
        finding ideas that gain weight
        <ul>
          <li>
            gain weight by moving forward in time
            <ul>
              <li>past, present, future</li>
            </ul>
          </li>
          <li>
            talking about different perspectives
            <ul>
              <li>you, I, we</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
