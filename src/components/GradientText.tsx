import * as React from 'react';

const GradientText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
    {children}
  </span>
);

export default GradientText;
