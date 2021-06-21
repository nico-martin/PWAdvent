import React from 'react';
import cn from '@utils/classnames';
import { isIos } from '@utils/helpers';
import { CloseButton } from '../index';
import styles from './ShadowBox.module.css';

export default ({
  title,
  children,
  close,
  size = 'large',
  className = '',
}: {
  title?: string;
  children?: any;
  close: Function;
  size?: 'large' | 'small';
  className?: string;
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [shadow, setShadow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  const onClose = () => {
    setShow(false);
    window.setTimeout(() => {
      close();
    }, 200);
  };

  return (
    <div
      className={cn(className, styles.root, styles[`size-${size}`])}
      data-visible={show}
    >
      <div className={styles.shadow} onClick={onClose} />
      <article
        className={styles.box}
        onScroll={(e) => {
          const scroll = (e.target as HTMLHtmlElement).scrollTop;
          if (shadow && scroll === 0) {
            setShadow(false);
          } else {
            setShadow(true);
          }
        }}
      >
        <header
          className={cn(styles.header, {
            [styles.headerShadow]: shadow,
            [styles.headerIos]: isIos,
          })}
        >
          {title !== null && <h1 className={styles.title}>{title}</h1>}{' '}
          <CloseButton className={styles.close} onClick={onClose} />
        </header>
        <div className={styles.content}>{children}</div>
      </article>
    </div>
  );
};
