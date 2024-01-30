import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="rhyme-types">Rhyme Types</h1>
    <p>
      work just the same as the chords under melody, giving emotional resonance
    </p>
    <h2 id="perfect-rhyme">Perfect Rhyme</h2>
    <ul>
      <li>
        <p>fully resolved feeling (Cmaj/C, sing C)</p>
      </li>
      <li>
        <p>vowel sounds identical (blood - mud, hat - cat)</p>
      </li>
      <li>
        consonants after vowel are identical, if any (trees - breeze, tree -
        free)
      </li>
      <li>
        rhyming syllables begin different (BLood - Mud, TRees - BReeze)
        <ul>
          <li>create tension to be resolved</li>
          <li>
            syllables starting the same are more “repetition”
            <ul>
              <li>called identity, not a rhyming function</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="family-rhymes">Family Rhymes</h2>
    <ul>
      <li>
        Closely related to perfect rhyme
        <ul>
          <li>Cmaj/G, sing C</li>
        </ul>
      </li>
    </ul>
    <h3 id="plosvies">Plosvies</h3>
    <ul>
      <li>
        <p>Stop air then explode</p>
        <ul>
          <li>
            P, lips, not engaging vocal chords (unvoiced)
            <ul>
              <li>engage vocal chords, become B (voiced)</li>
            </ul>
          </li>
          <li>
            T, tongue tip on palette, unvoiced
            <ul>
              <li>Voiced, D</li>
            </ul>
          </li>
          <li>
            K, mid tongue on back palette{' '}
            <ul>
              <li>Voiced, G</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <p>Changes second condition of perfect rhyme</p>
        <ul>
          <li>Words ending in vowel sounds don't fit! </li>
          <li>consonants after vowel phonetically related</li>
          <li>Mud - Cut/hut/shut</li>
        </ul>
      </li>
      <li>
        <p>Can work with all 6 plosives to retain close rhyme</p>
        <ul>
          <li>voiced/unvoiced pairs closest substitute to perfect rhyme</li>
        </ul>
      </li>
    </ul>
    <h3 id="fricatives">Fricatives</h3>
    <ul>
      <li>
        <p>Impede air column to create friction</p>
        <ul>
          <li>
            Unvoiced, lined up with voiced partners{' '}
            <ul>
              <li>f, th, s, sh, ch (companions)</li>
            </ul>
          </li>
          <li>
            Voiced, lined up with unvoiced partners
            <ul>
              <li>v, TH, z, zh, j (companions)</li>
            </ul>
          </li>
          <li>
            Love - buzz - grudge (j sound) - rough (f sound) - crush - crutch
          </li>
        </ul>
      </li>
      <li>
        <p>Remember, singers sing vowels</p>
        <ul>
          <li>vowels are tone generators, vowels are KING</li>
          <li>that's what really creates rhyme</li>
          <li>
            vowel exaggerated medium
            <ul>
              <li>words sound different spoken than sung</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="nasals">Nasals</h3>
    <ul>
      <li>
        Come out your nose
        <ul>
          <li>
            m, n, ng
            <ul>
              <li>all voiced</li>
            </ul>
          </li>
          <li>come - sun - hung</li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        rhyme creates closure
        <ul>
          <li>sense of acceleration if within line, pushes forward</li>
          <li>perfect rhyme would be a crisper, more concrete closure</li>
        </ul>
      </li>
    </ul>
    <h2 id="additive-and-subtractive-rhymes">
      Additive and Subtractive Rhymes
    </h2>
    <ul>
      <li>
        words ending in L or R, or ending in vowel sound, more specifically
      </li>
      <li>Cmaj/E, sing C (from above example)</li>
    </ul>
    <h3 id="additive">Additive</h3>
    <ul>
      <li>
        two words/syllables, second adds something that first doesn't contain
      </li>
      <li>
        most stable, add as little sound as possible
        <ul>
          <li>cry - bribe, cry - ride</li>
        </ul>
      </li>
      <li>
        less stable, adding more sounds{' '}
        <ul>
          <li>cry - smile, cry - bride (changing tongue position here)</li>
        </ul>
      </li>
      <li>
        adding syllable creates a little more stability, like adding extra words
        in line length
      </li>
    </ul>
    <h3 id="subtractive">Subtractive</h3>
    <ul>
      <li>flip of additive</li>
      <li>speed - free, stove - glow</li>
      <li>less stable, somethings missing</li>
    </ul>
    <h2 id="assonance-rhyme">Assonance Rhyme</h2>
    <ul>
      <li>always unstable</li>
      <li>Cmaj (no C)/E, sing C (from above example)</li>
      <li>
        only thing words have in common is vowel sound
        <ul>
          <li>all syllables have ending consonants</li>
          <li>
            ending consonants belong to different phonetic families
            <ul>
              <li>plosive, fricative, nasals</li>
              <li>life - tide, blood - rush, fool - rude, fire - smile</li>
            </ul>
          </li>
          <li>won't give full rhyming effect</li>
          <li>diminish acceleration feeling</li>
          <li>good for talking about something diminishing, unstable, etc</li>
        </ul>
      </li>
      <li>doesn't make it feel shut, “open the gate of emotion”</li>
      <li>
        feels like there's some connection, but not strong enough to be stable
        and say “I'm done”
      </li>
    </ul>
    <h2 id="consonance-rhyme">Consonance Rhyme</h2>
    <ul>
      <li>least resolved, most unstable</li>
      <li>vowel sounds different, ending syllable is the same</li>
      <li>
        weakest possible sonic connection (since vowels are exaggerated in song)
        <ul>
          <li>
            friend - wind, defense - innocence, one - alone, scars - fears
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>Rhyme type itself can create emotion</li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
