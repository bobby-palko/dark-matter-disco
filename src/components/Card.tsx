import * as React from 'react';

const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="rounded-3xl p-px my-4 bg-gradient-to-r from-primary to-secondary">
    <div className="p-10 bg-neutral-card-dark rounded-[calc(1.5rem-1px)]">
      {children}
    </div>
  </div>
);

export default Card;
