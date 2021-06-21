import React from 'react';
import cn from '@utils/classnames';
import styles from './SVG.module.css';

const SVG = ({
  path,
  className = '',
  inline = false,
  ...props
}: {
  path: string;
  className?: string;
  inline?: boolean;
  [key: string]: any;
}) => {
  const [loadedIcon, setLoadedIcon] = React.useState('');

  React.useEffect(() => {
    async function loadIcon() {
      return await import(
        /* webpackMode: "eager" */ `../../public/icon/${path}`
      );
    }
    loadIcon().then((loaded) => setLoadedIcon(loaded.default));
  }, [path]);

  return (
    <figure
      className={cn(className, styles.root, {
        [styles.isInline]: inline,
      })}
      dangerouslySetInnerHTML={{ __html: loadedIcon }}
      {...props}
    />
  );
};

export default SVG;
