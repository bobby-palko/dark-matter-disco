import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Card, Heading, List } from '../../components';

const SongwritingPOVPage: React.FC<PageProps> = () => (
  <main>
    <Heading>Point of View</Heading>
    <Card>
      <Heading headingType="section">Third Person</Heading>
      <p>
        <em>Storyteller</em>
      </p>
      <List>
        <li>“he loved her so much yet she failed to return his love”</li>
        <li>asking to observe story</li>
        <li>no intimate relationship between singer and audience</li>
        <li>third person</li>
        <li>most objective</li>
        <li>“wide angle shot”</li>
        <li>narrator knows everything</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">First Person</Heading>
      <p>
        <em>I, me, mine</em>
      </p>
      <List>
        <li>“I loved her so much yet she failed to return my love”</li>
        <li>
          telling audience something about me, “she” remains at a distance
        </li>
        <li>great to explain how I feel</li>
        <li>why of story is something i learned</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Second Person</Heading>
      <p>
        <em>You, yours</em>
      </p>
      <List>
        <li>“you loved her so much yet she failed to return your love”</li>
        <li>more intimate than first person!</li>
        <li>Bob Dylan - Like a Rolling Stone</li>
      </List>
    </Card>
    <Card>
      <Heading headingType="section">Direct Address</Heading>
      <p>
        <em>I'm talking to you</em>
      </p>
      <List>
        <li>“i loved you so much yet you failed to return my love”</li>
        <li>most intimate</li>
      </List>
    </Card>
  </main>
);

export default SongwritingPOVPage;

export const Head: HeadFC = () => <title>Songwriting Theory - POV</title>;
