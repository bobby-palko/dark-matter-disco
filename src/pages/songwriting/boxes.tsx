import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, List } from '../../components';

const SongwritingBoxesPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Boxes</Heading>
    <List>
      <li>
        Keep listener interested
        <List>
          <li>timing</li>
          <li>don't say everything in first verse</li>
          <li>pace yourself</li>
          <li>create journey</li>
        </List>
      </li>
      <li>
        producer mindset in energy
        <List>
          <li>first verse low key</li>
          <li>first chorus higher</li>
          <li>second verse between first verse and chorus</li>
          <li>second chorus even higher</li>
          <li>bridge builds and builds</li>
          <li>last chorus most energy!</li>
        </List>
      </li>
      <li>what do you want to say in the song?</li>
      <li>
        think of song structure in 3 boxes
        <List>
          <li>
            small then medium then large
            <List>
              <li>medium needs to hold small, large hold both</li>
            </List>
          </li>
          <li>
            1st box, song idea - running into an ex
            <List>
              <li>“Are you happy? I’d just like to know”</li>
            </List>
          </li>
          <li>
            2nd box, builds off idea
            <List>
              <li>“Did you cheat on me? I’d just like to know”</li>
              <li>
                did you know you were going to move in with him so quickly after
                us?
              </li>
              <li>did you hide the photo of us when he was there?</li>
              <li>
                I'd just like to know - gains weight now! means more the 2nd
                time around
              </li>
            </List>
          </li>
          <li>
            3rd box, big idea, place to arrive, the why of the song
            <List>
              <li>“All I wanted was honesty. I’d just like to know.”</li>
              <li>said we were gonna tell each other everything</li>
              <li>
                you could’ve told me about him, i wouldn’t have stopped you
              </li>
            </List>
          </li>
        </List>
      </li>
      <li>music idea reaches climax with producer build</li>
      <li>
        not every song will do that
        <List>
          <li>
            good for when you want listener to pay attention to what you want to
            say
          </li>
        </List>
      </li>
      <li>
        finding ideas that gain weight
        <List>
          <li>
            gain weight by moving forward in time
            <List>
              <li>past, present, future</li>
            </List>
          </li>
          <li>
            talking about different perspectives
            <List>
              <li>you, I, we</li>
            </List>
          </li>
        </List>
      </li>
    </List>
  </main>
);

export default SongwritingBoxesPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
