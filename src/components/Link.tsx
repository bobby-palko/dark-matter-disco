import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps extends React.PropsWithChildren {
  to: string;
}

const Link: React.FC<LinkProps> = ({ children, to }) => (
  <GatsbyLink to={to} className="underline">
    {children}
  </GatsbyLink>
);

export default Link;
