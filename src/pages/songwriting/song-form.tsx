import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Card, Heading, Link, List } from '../../components';

const SongwritingIndexPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Song Form</Heading>
    <List>
      <li>
        <Link to="/songwriting/boxes">Boxes</Link> are way idea evolves
        <List>
          <li>nothing to do with verses, choruses, etc</li>
          <li>
            example:
            <List>
              <li>1st box = verse verse prechorus chorus</li>
              <li>2nd box = verse pre chorus</li>
              <li>3rd box = two line bridge</li>
            </List>
          </li>
          <li>description of way ideas move</li>
        </List>
      </li>
      <li>create song in sections: verse, chorus, etc</li>
    </List>
    <Card>
      <Heading headingType="section">Verse</Heading>
      <List>
        <li>give fundamental story/feeling, platform of the song</li>
        <li>delivers basic information of the song</li>
        <li>meat and potatoes</li>
        <li>advances plot</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Chorus</Heading>
      <List>
        <li>literally means many people singing together</li>
        <li>usually repeats in a song</li>
        <li>should be able to grow</li>
        <li>state central idea of song</li>
        <li>take on info verses give it</li>
        <li>
          should be fairly easy to sing and remember, so everyone can sing
          along!
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
          <List>
            <li>available to audience, but not to actors on stage</li>
          </List>
        </li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Bridge</Heading>
      <List>
        <li>nobody lives on the bridge</li>
        <li>connects song segments</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Pre-chorus</Heading>
      <List>
        <li>just little bridge that moves from verse to chorus</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">The Story of Bernice</Heading>
      <List>
        <li>Chorus needs to be the highlight of the song</li>
        <li>Verse and bridge not as “glowing”</li>
        <li>
          Think bride and bridesmaids
          <List>
            <li>
              Chorus is “the dress”
              <List>
                <li>highlights all the best things!</li>
                <li>hides the ugly bits (dress not chorus)</li>
              </List>
            </li>
            <li>
              Verse is the “sack” the bridesmaids wore
              <List>
                <li>diminished, not as awesome as “the dress”</li>
              </List>
            </li>
          </List>
        </li>
      </List>
    </Card>
  </main>
);

export default SongwritingIndexPage;

export const Head: HeadFC = () => <title>Songwriting Theory</title>;
