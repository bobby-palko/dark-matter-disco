import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const SongwritingPOVPage: React.FC<PageProps> = () => (
  <main>
    <h1 id="point-of-view">Point of View</h1>
    <h2 id="third-person">Third Person</h2>
    <p>
      <em>Storyteller</em>
    </p>
    <ul>
      <li>“he loved her so much yet she failed to return his love”</li>
      <li>asking to observe story</li>
      <li>no intimate relationship between singer and audience</li>
      <li>third person</li>
      <li>most objective</li>
      <li>“wide angle shot”</li>
      <li>narrator knows everything</li>
    </ul>
    <h2 id="first-person">First Person</h2>
    <p>
      <em>I, me, mine</em>
    </p>
    <ul>
      <li>“I loved her so much yet she failed to return my love”</li>
      <li>telling audience something about me, “she” remains at a distance</li>
      <li>great to explain how I feel</li>
      <li>why of story is something i learned</li>
    </ul>
    <h2 id="second-person">Second Person</h2>
    <p>
      <em>You, yours</em>
    </p>
    <ul>
      <li>“you loved her so much yet she failed to return your love”</li>
      <li>more intimate than first person!</li>
      <li>Bob Dylan - Like a Rolling Stone</li>
    </ul>
    <h2 id="direct-address">Direct Address</h2>
    <p>
      <em>I&#39;m talking to you</em>
    </p>
    <ul>
      <li>“i loved you so much yet you failed to return my love”</li>
      <li>most intimate</li>
    </ul>
  </main>
);

export default SongwritingPOVPage;

export const Head: HeadFC = () => <title>Songwriting Theory - POV</title>;
