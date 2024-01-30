import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="making-it-move">Making it Move</h1>
    <p>
      <em>rhythm of lines</em>
    </p>
    <ul>
      <li>
        <Link to="/songwriting/line-length">Line Length</Link> isn't about just
        syllables, it's determined by the number of stressed syllables
        <ul>
          <li>
            we tend to connect words; speak flowingly, not stopping completely
            between words (stopping between words gets boring, irritating, feels
            robotic)
            <ul>
              <li>create layers with pitch variation (stressed syllables!)</li>
            </ul>
          </li>
          <li>
            Multi-syllable words
            <ul>
              <li>
                stress (MUL ti SYL la BLE)
                <ul>
                  <li>
                    SYL is “highest pitch,” therefore is the primary stress
                  </li>
                  <li>MUL, BLE - secondary stress</li>
                  <li>primary stress should have strong position in the bar</li>
                  <li>have a “melody”</li>
                </ul>
              </li>
              <li>
                can be stressed differently depending on region as well
                <ul>
                  <li>(north, poLICE - south accent, POlice)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            One syllable words
            <ul>
              <li>
                not stressed/unstressed by melody, but by function
                <ul>
                  <li>
                    meaning function
                    <ul>
                      <li>
                        semantic/cognitive, carries a meaning
                        <ul>
                          <li>nouns, verbs, adj, adv</li>
                          <li>always stressed</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    grammatical/syntactic function
                    <ul>
                      <li>
                        aide and abet meaning functions
                        <ul>
                          <li>
                            articles (a, than, the), conjunction (and, but, yet,
                            or), prepositions (in, on, at, before), personal
                            pronouns (i, you, he, she, it)
                            <ul>
                              <li>
                                try to avoid prepositions catching the
                                spotlight, they have a tendency to be in the
                                spotlight
                              </li>
                            </ul>
                          </li>
                          <li>
                            not stressed unless providing a contrast
                            <ul>
                              <li>“throw the ball To me not AT me”</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>lower in pitch, because they're not stressed</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        start forming patterns of stressed and unstressed syllables
        <ul>
          <li>organize lines in rhythm </li>
          <li>prepares lines for lyrics, and melodic rhythm</li>
        </ul>
      </li>
      <li>
        preserve the natural state of the language!!
        <ul>
          <li>one of the primary jobs of a songwriter</li>
          <li>don't place stress on naturally unstressed syllable</li>
        </ul>
      </li>
      <li>
        one bar of 4/4 time, 4 quarter notes per bar
        <ul>
          <li>
            each bar is strong on down beat, weak second, mid third, weak fourth
            <ul>
              <li>ONE, two, Three, four</li>
            </ul>
          </li>
          <li>
            place stressed syllables on strong beats, stressed positions of the
            bar
          </li>
          <li>strong beats of the bar are spotlights, use them well!</li>
          <li>
            placing words behind (or in front of) the beat to diminish them
            <ul>
              <li>
                good for the grammatical function words that you don't want to
                draw attention to
              </li>
            </ul>
          </li>
          <li>takes the air out of the tires of the song</li>
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
