import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Card, GradientText, Heading, List } from '../../components';

const SongwritingBodyLanguagePage: React.FC<PageProps> = () => (
  <main>
    <Heading>
      <GradientText>Body Language</GradientText>
    </Heading>
    <p>How do we convey body language in a song?</p>
    <Card>
      <Heading headingType="section">Phrasing</Heading>
      <p>Phrase that starts on downbeat of bar, front-heavy:</p>
      <List>
        <li>
          weight of line in front of the line. strongest, brightest light (the
          downbeat)
        </li>
        <li>
          Has to do with the strongest stressed syllable falling on the
          strongest beat
        </li>
        <li>Front-heavy lines are stable</li>
      </List>
      <p>Phrase that starts after the downbeat of the bar, back-heavy:</p>
      <List>
        <li>weight of line is in the back…duh</li>
        <li>is 'in motion' therefore unstable</li>
      </List>
      <p>
        Create contrast to emphasize one or the other. Front-heavy line before a
        back-heavy line to really make it feel more emotional
      </p>
    </Card>
    <Card>
      <Heading headingType="section">Time Signature Weight</Heading>
      <p>4/4 time is always Strongest, Weak, Strong, Weak</p>
      <List>
        <li>Quarter notes define this</li>
        <li>16th notes? Still Swsw</li>
        <li>Half notes? Sw|sw</li>
        <li>Whole notes? S|w|s|w</li>
      </List>
      <p>Starting lines in second bar?</p>
      <List>
        <li>count in half time, it starts on 3 (1,2|3,4)</li>
        <li>still back heavy phrasing</li>
      </List>
      <p>Still works in 3/4!!</p>
      <List>
        <li>Strong, 2, 3, Weak, 2, 3, Strong 2, 3, Weak, 2, 3</li>
      </List>
      <p>
        So starting on the downbeat on the weak bar would be weak, but not as
        weak as starting back-heavy in a weak bar
      </p>
    </Card>
    <Card>
      <Heading headingType="section">How do you know how you feel?</Heading>
      <p>People whine and tease in minor thirds (na-na na-na na) 😛</p>
      <List>
        <li>must be a minor third from something!</li>
        <li>
          Do we establish/express a tonic (root note) when we talk?
          <List>
            <li>YES</li>
            <li>Tonal platform from which all our language “evolves”</li>
          </List>
        </li>
      </List>
      <Heading headingType="sub-section">How do we express a tonic?</Heading>
      <p>Grammatical functions (the, I, and, etc)</p>
      <List>
        <li>These set the fundamental pitch</li>
        <li>
          Stressed syllables usually either a 3rd or 5th higher
          <List>
            <li>arpeggiating! </li>
          </List>
        </li>
        <li>
          Whine and tease in minor 3rd, happy in major 3rd, ask questions in 5th
        </li>
      </List>
      <p>
        Which degree on the scale are you talking, setting your grammatical
        functions?
      </p>
      <List>
        <li>
          Subdominant - 4th…Unstable (like before!)
          <List>
            <li>
              feels like we need to go somewhere, move (think an auctioneer,
              preacher)
            </li>
            <li>
              stressed syllables arpeggiating the 3rd and 5th higher of the
              grammatical function still
            </li>
          </List>
        </li>
        <li>
          Dominant - 5th…unstable
          <List>
            <li>
              feels aggressive, need to go back to tonic, get a little irritated
            </li>
            <li>we threaten on the 5th below the tonic (deep scary voice)</li>
          </List>
        </li>
        <li>
          7th…least stable
          <List>
            <li>“I don't want to die!” degree</li>
          </List>
        </li>
      </List>
      <p>So, how are you saying the line?</p>
      <List>
        <li>
          Say your lyric with feeling, then listen to where the pitches are!{' '}
        </li>
        <li>then you know how stable/unstable your line should be!</li>
      </List>
    </Card>
  </main>
);

export default SongwritingBodyLanguagePage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
