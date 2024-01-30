import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="song-form">Song Form</h1>
    <ul>
      <li>
        <Link to="/songwriting/boxes">Boxes</Link> are way idea evolves
        <ul>
          <li>nothing to do with verses, choruses, etc</li>
          <li>
            example:
            <ul>
              <li>1st box = verse verse prechorus chorus</li>
              <li>2nd box = verse pre chorus</li>
              <li>3rd box = two line bridge</li>
            </ul>
          </li>
          <li>description of way ideas move</li>
        </ul>
      </li>
      <li>create song in sections: verse, chorus, etc</li>
    </ul>
    <h2 id="verse">Verse</h2>
    <ul>
      <li>give fundamental story/feeling, platform of the song</li>
      <li>delivers basic information of the song</li>
      <li>meat and potatoes</li>
      <li>advances plot</li>
    </ul>
    <h2 id="chorus">Chorus</h2>
    <ul>
      <li>literally means many people singing together</li>
      <li>usually repeats in a song</li>
      <li>should be able to grow</li>
      <li>state central idea of song</li>
      <li>take on info verses give it</li>
      <li>
        should be fairly easy to sing and remember, so everyone can sing along!
      </li>
      <li>doesn't typically advance plot</li>
      <li>
        doesn't typically change words<h3 id="greek-chorus">Greek Chorus</h3>
      </li>
      <li>the ones who sit in judgment</li>
      <li>comment on the “trial” (the stage play), state it</li>
      <li>different level of information</li>
      <li>“audiences representative” on stage</li>
      <li>
        separate from actors, making comments on whats going on
        <ul>
          <li>available to audience, but not to actors on stage</li>
        </ul>
      </li>
    </ul>
    <h2 id="bridge">Bridge</h2>
    <ul>
      <li>nobody lives on the bridge</li>
      <li>connects song segments</li>
    </ul>
    <h2 id="pre-chorus">Pre-chorus</h2>
    <ul>
      <li>just little bridge that moves from verse to chorus</li>
    </ul>
    <h2 id="the-story-of-bernice">The Story of Bernice</h2>
    <ul>
      <li>Chorus needs to be the highlight of the song</li>
      <li>Verse and bridge not as “glowing”</li>
      <li>
        Think bride and bridesmaids
        <ul>
          <li>
            Chorus is “the dress”
            <ul>
              <li>highlights all the best things!</li>
              <li>hides the ugly bits (dress not chorus)</li>
            </ul>
          </li>
          <li>
            Verse is the “sack” the bridesmaids wore
            <ul>
              <li>diminished, not as awesome as “the dress”</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
