import * as React from 'react';

interface ListProps extends React.PropsWithChildren {
  listType?: 'ordered' | 'unordered';
}

const sharedStyles = 'list-inside my-4 pl-10';

const List: React.FC<ListProps> = ({ children, listType = 'unordered' }) => {
  if (listType === 'ordered') {
    return <ol className={`${sharedStyles} list-decimal`}>{children}</ol>;
  }
  if (listType === 'unordered') {
    return <ul className={`${sharedStyles} list-disc`}>{children}</ul>;
  }
};

export default List;
