import * as React from 'react';

const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="w-full p-4 mb-4 bg-slate-700 shadow-md">{children}</div>
);

export default Card;
