import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="body-language">Body Language</h1>
    <p>How do we convey body language in a song?</p>
    <h2 id="phrasing">Phrasing</h2>
    <p>Phrase that starts on downbeat of bar, front-heavy:</p>
    <ul>
      <li>
        weight of line in front of the line. strongest, brightest light (the
        downbeat)
      </li>
      <li>
        Has to do with the strongest stressed syllable falling on the strongest
        beat
      </li>
      <li>Front-heavy lines are stable</li>
    </ul>
    <p>Phrase that starts after the downbeat of the bar, back-heavy:</p>
    <ul>
      <li>weight of line is in the back…duh</li>
      <li>is 'in motion' therefore unstable</li>
    </ul>
    <p>
      Create contrast to emphasize one or the other. Front-heavy line before a
      back-heavy line to really make it feel more emotional
    </p>
    <h2 id="time-signature-weight">Time Signature Weight</h2>
    <p>4/4 time is always Strongest, Weak, Strong, Weak</p>
    <ul>
      <li>Quarter notes define this</li>
      <li>16th notes? Still Swsw</li>
      <li>Half notes? Sw|sw</li>
      <li>Whole notes? S|w|s|w</li>
    </ul>
    <p>Starting lines in second bar?</p>
    <ul>
      <li>count in half time, it starts on 3 (1,2|3,4)</li>
      <li>still back heavy phrasing</li>
    </ul>
    <p>Still works in 3/4!!</p>
    <ul>
      <li>Strong, 2, 3, Weak, 2, 3, Strong 2, 3, Weak, 2, 3</li>
    </ul>
    <p>
      So starting on the downbeat on the weak bar would be weak, but not as weak
      as starting back-heavy in a weak bar
    </p>
    <h2 id="how-do-you-know-how-you-feel-">How do you know how you feel?</h2>
    <p>People whine and tease in minor thirds (na-na na-na na) 😛</p>
    <ul>
      <li>must be a minor third from something!</li>
      <li>
        Do we establish/express a tonic (root note) when we talk?
        <ul>
          <li>YES</li>
          <li>Tonal platform from which all our language “evolves”</li>
        </ul>
      </li>
    </ul>
    <h3 id="how-do-we-express-a-tonic-">How do we express a tonic?</h3>
    <p>Grammatical functions (the, I, and, etc)</p>
    <ul>
      <li>These set the fundamental pitch</li>
      <li>
        Stressed syllables usually either a 3rd or 5th higher
        <ul>
          <li>arpeggiating! </li>
        </ul>
      </li>
      <li>
        Whine and tease in minor 3rd, happy in major 3rd, ask questions in 5th
      </li>
    </ul>
    <p>
      Which degree on the scale are you talking, setting your grammatical
      functions?
    </p>
    <ul>
      <li>
        Subdominant - 4th…Unstable (like before!)
        <ul>
          <li>
            feels like we need to go somewhere, move (think an auctioneer,
            preacher)
          </li>
          <li>
            stressed syllables arpeggiating the 3rd and 5th higher of the
            grammatical function still
          </li>
        </ul>
      </li>
      <li>
        Dominant - 5th…unstable
        <ul>
          <li>
            feels aggressive, need to go back to tonic, get a little irritated
          </li>
          <li>we threaten on the 5th below the tonic (deep scary voice)</li>
        </ul>
      </li>
      <li>
        7th…least stable
        <ul>
          <li>“I don't want to die!” degree</li>
        </ul>
      </li>
    </ul>
    <p>So, how are you saying the line?</p>
    <ul>
      <li>
        Say your lyric with feeling, then listen to where the pitches are!{' '}
      </li>
      <li>then you know how stable/unstable your line should be!</li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
