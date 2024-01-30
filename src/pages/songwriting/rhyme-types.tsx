import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Card, Heading, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Rhyme Types</Heading>
    <p>
      work just the same as the chords under melody, giving emotional resonance
    </p>
    <Card>
      <Heading headingType="section">Perfect Rhyme</Heading>
      <List>
        <li>fully resolved feeling (Cmaj/C, sing C)</li>
        <li>vowel sounds identical (blood - mud, hat - cat)</li>
        <li>
          consonants after vowel are identical, if any (trees - breeze, tree -
          free)
        </li>
        <li>
          rhyming syllables begin different (BLood - Mud, TRees - BReeze)
          <List>
            <li>create tension to be resolved</li>
            <li>
              syllables starting the same are more “repetition”
              <List>
                <li>called identity, not a rhyming function</li>
              </List>
            </li>
          </List>
        </li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Family Rhymes</Heading>
      <List>
        <li>
          Closely related to perfect rhyme
          <List>
            <li>Cmaj/G, sing C</li>
          </List>
        </li>
      </List>
      <Heading headingType="sub-section">Plosvies</Heading>
      <List>
        <li>
          Stop air then explode
          <List>
            <li>
              P, lips, not engaging vocal chords (unvoiced)
              <List>
                <li>engage vocal chords, become B (voiced)</li>
              </List>
            </li>
            <li>
              T, tongue tip on palette, unvoiced
              <List>
                <li>Voiced, D</li>
              </List>
            </li>
            <li>
              K, mid tongue on back palette{' '}
              <List>
                <li>Voiced, G</li>
              </List>
            </li>
          </List>
        </li>
        <li>
          Changes second condition of perfect rhyme
          <List>
            <li>Words ending in vowel sounds don't fit! </li>
            <li>consonants after vowel phonetically related</li>
            <li>Mud - Cut/hut/shut</li>
          </List>
        </li>
        <li>
          Can work with all 6 plosives to retain close rhyme
          <List>
            <li>voiced/unvoiced pairs closest substitute to perfect rhyme</li>
          </List>
        </li>
      </List>
      <Heading headingType="sub-section">Fricatives</Heading>
      <List>
        <li>
          Impede air column to create friction
          <List>
            <li>
              Unvoiced, lined up with voiced partners{' '}
              <List>
                <li>f, th, s, sh, ch (companions)</li>
              </List>
            </li>
            <li>
              Voiced, lined up with unvoiced partners
              <List>
                <li>v, TH, z, zh, j (companions)</li>
              </List>
            </li>
            <li>
              Love - buzz - grudge (j sound) - rough (f sound) - crush - crutch
            </li>
          </List>
        </li>
        <li>
          Remember, singers sing vowels
          <List>
            <li>vowels are tone generators, vowels are KING</li>
            <li>that's what really creates rhyme</li>
            <li>
              vowel exaggerated medium
              <List>
                <li>words sound different spoken than sung</li>
              </List>
            </li>
          </List>
        </li>
      </List>
      <Heading headingType="sub-section">Nasals</Heading>
      <List>
        <li>
          Come out your nose
          <List>
            <li>
              m, n, ng
              <List>
                <li>all voiced</li>
              </List>
            </li>
            <li>come - sun - hung</li>
          </List>
        </li>
      </List>
      <List>
        <li>
          rhyme creates closure
          <List>
            <li>sense of acceleration if within line, pushes forward</li>
            <li>perfect rhyme would be a crisper, more concrete closure</li>
          </List>
        </li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Additive and Subtractive Rhymes</Heading>
      <List>
        <li>
          words ending in L or R, or ending in vowel sound, more specifically
        </li>
        <li>Cmaj/E, sing C (from above example)</li>
      </List>
      <Heading headingType="sub-section">Additive</Heading>
      <List>
        <li>
          two words/syllables, second adds something that first doesn't contain
        </li>
        <li>
          most stable, add as little sound as possible
          <List>
            <li>cry - bribe, cry - ride</li>
          </List>
        </li>
        <li>
          less stable, adding more sounds{' '}
          <List>
            <li>cry - smile, cry - bride (changing tongue position here)</li>
          </List>
        </li>
        <li>
          adding syllable creates a little more stability, like adding extra
          words in line length
        </li>
      </List>
      <Heading headingType="sub-section">Subtractive</Heading>
      <List>
        <li>flip of additive</li>
        <li>speed - free, stove - glow</li>
        <li>less stable, somethings missing</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Assonance Rhyme</Heading>
      <List>
        <li>always unstable</li>
        <li>Cmaj (no C)/E, sing C (from above example)</li>
        <li>
          only thing words have in common is vowel sound
          <List>
            <li>all syllables have ending consonants</li>
            <li>
              ending consonants belong to different phonetic families
              <List>
                <li>plosive, fricative, nasals</li>
                <li>life - tide, blood - rush, fool - rude, fire - smile</li>
              </List>
            </li>
            <li>won't give full rhyming effect</li>
            <li>diminish acceleration feeling</li>
            <li>good for talking about something diminishing, unstable, etc</li>
          </List>
        </li>
        <li>doesn't make it feel shut, “open the gate of emotion”</li>
        <li>
          feels like there's some connection, but not strong enough to be stable
          and say “I'm done”
        </li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Consonance Rhyme</Heading>
      <List>
        <li>least resolved, most unstable</li>
        <li>vowel sounds different, ending syllable is the same</li>
        <li>
          weakest possible sonic connection (since vowels are exaggerated in
          song)
          <List>
            <li>
              friend - wind, defense - innocence, one - alone, scars - fears
            </li>
          </List>
        </li>
      </List>
      <List>
        <li>Rhyme type itself can create emotion</li>
      </List>
    </Card>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
