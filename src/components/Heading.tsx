import * as React from 'react';
import GradientText from './GradientText';

interface HeadingProps extends React.PropsWithChildren {
  headingType?: 'page' | 'section' | 'sub-section' | 'overline'; // h1, h2, h3, h4 respectively
}

const sharedStyles = 'font-heading my-4';

const Heading: React.FC<HeadingProps> = ({
  children,
  headingType = 'page',
}) => {
  if (headingType === 'page') {
    return (
      <h1 className={`${sharedStyles} text-5xl`}>
        <GradientText>{children}</GradientText>
      </h1>
    );
  }
  if (headingType === 'section') {
    return <h2 className={`${sharedStyles} text-3xl`}>{children}</h2>;
  }
  if (headingType === 'sub-section') {
    return <h3 className={`${sharedStyles} text-2xl`}>{children}</h3>;
  }
  if (headingType === 'overline') {
    return <h4 className={`${sharedStyles} text-xl`}>{children}</h4>;
  }
};

export default Heading;
