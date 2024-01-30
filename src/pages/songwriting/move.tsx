import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Heading, Link, List } from '../../components';

const SongwritingMovePage: React.FC<PageProps> = () => (
  <main>
    <Heading>Making it Move</Heading>
    <p>
      <em>rhythm of lines</em>
    </p>
    <List>
      <li>
        <Link to="/songwriting/line-length">Line Length</Link> isn't about just
        syllables, it's determined by the number of stressed syllables
        <List>
          <li>
            we tend to connect words; speak flowingly, not stopping completely
            between words (stopping between words gets boring, irritating, feels
            robotic)
            <List>
              <li>create layers with pitch variation (stressed syllables!)</li>
            </List>
          </li>
          <li>
            Multi-syllable words
            <List>
              <li>
                stress (MUL ti SYL la BLE)
                <List>
                  <li>
                    SYL is “highest pitch,” therefore is the primary stress
                  </li>
                  <li>MUL, BLE - secondary stress</li>
                  <li>primary stress should have strong position in the bar</li>
                  <li>have a “melody”</li>
                </List>
              </li>
              <li>
                can be stressed differently depending on region as well
                <List>
                  <li>(north, poLICE - south accent, POlice)</li>
                </List>
              </li>
            </List>
          </li>
          <li>
            One syllable words
            <List>
              <li>
                not stressed/unstressed by melody, but by function
                <List>
                  <li>
                    meaning function
                    <List>
                      <li>
                        semantic/cognitive, carries a meaning
                        <List>
                          <li>nouns, verbs, adj, adv</li>
                          <li>always stressed</li>
                        </List>
                      </li>
                    </List>
                  </li>
                  <li>
                    grammatical/syntactic function
                    <List>
                      <li>
                        aide and abet meaning functions
                        <List>
                          <li>
                            articles (a, than, the), conjunction (and, but, yet,
                            or), prepositions (in, on, at, before), personal
                            pronouns (i, you, he, she, it)
                            <List>
                              <li>
                                try to avoid prepositions catching the
                                spotlight, they have a tendency to be in the
                                spotlight
                              </li>
                            </List>
                          </li>
                          <li>
                            not stressed unless providing a contrast
                            <List>
                              <li>“throw the ball To me not AT me”</li>
                            </List>
                          </li>
                        </List>
                      </li>
                      <li>lower in pitch, because they're not stressed</li>
                    </List>
                  </li>
                </List>
              </li>
            </List>
          </li>
        </List>
      </li>
      <li>
        start forming patterns of stressed and unstressed syllables
        <List>
          <li>organize lines in rhythm </li>
          <li>prepares lines for lyrics, and melodic rhythm</li>
        </List>
      </li>
      <li>
        preserve the natural state of the language!!
        <List>
          <li>one of the primary jobs of a songwriter</li>
          <li>don't place stress on naturally unstressed syllable</li>
        </List>
      </li>
      <li>
        one bar of 4/4 time, 4 quarter notes per bar
        <List>
          <li>
            each bar is strong on down beat, weak second, mid third, weak fourth
            <List>
              <li>ONE, two, Three, four</li>
            </List>
          </li>
          <li>
            place stressed syllables on strong beats, stressed positions of the
            bar
          </li>
          <li>strong beats of the bar are spotlights, use them well!</li>
          <li>
            placing words behind (or in front of) the beat to diminish them
            <List>
              <li>
                good for the grammatical function words that you don't want to
                draw attention to
              </li>
            </List>
          </li>
          <li>takes the air out of the tires of the song</li>
        </List>
      </li>
    </List>
  </main>
);

export default SongwritingMovePage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
