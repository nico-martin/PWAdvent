import React from 'react';

import './SVG.css';

const SVG = ({
  path,
  className = '',
  ...props
}: {
  path: string;
  className?: string;
  [key: string]: any;
}) => {
  const [loadedIcon, setLoadedIcon] = React.useState('');

  React.useEffect(() => {
    async function loadIcon() {
      return await import(
        /* webpackMode: "eager" */ `../../assets/static/${path}`
      );
    }
    loadIcon().then(loaded => setLoadedIcon(loaded.default));
  }, [path]);

  return (
    <figure
      className={`${className} svg`}
      dangerouslySetInnerHTML={{ __html: loadedIcon }}
      {...props}
    />
  );
};

export default SVG;
