import React from 'react';
import Helmet from 'react-helmet';

import { CloseButton, Loader } from '../index';
import cn from '@utils/classnames';

import './ContentModal.css';
import { metaTitle } from '@utils/metas';

const ContentModal = ({
  title,
  children,
  onClose: close,
  className = '',
  loading = false,
  size = 'large',
}: {
  title: string;
  children?: React.JSX.Element | React.JSX.Element[] | string;
  onClose: Function;
  className?: string;
  loading?: boolean;
  size?: 'large' | 'small';
  [key: string]: any;
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
      className={cn(className, 'content-modal', `content-modal--${size}`)}
      data-visible={show}
    >
      <Helmet>
        <title>{metaTitle(title)}</title>
      </Helmet>
      <div className="content-modal__shadow" onClick={() => onClose()} />
      <main
        className="content-modal__box"
        onScroll={e => {
          const scroll = (e.target as HTMLHtmlElement).scrollTop;
          if (shadow && scroll === 0) {
            setShadow(false);
          } else {
            setShadow(true);
          }
        }}
      >
        <header
          className={`content-modal__header ${
            shadow ? 'content-modal__header--shadow' : ''
          }`}
        >
          <h1 className="content-modal__title">{title}</h1>
          <CloseButton
            className="content-modal__close"
            onClick={() => onClose()}
          />
        </header>
        <div className="content-modal__content">
          {loading ? <Loader className="content-modal__loader" /> : children}
        </div>
      </main>
    </div>
  );
};

export default ContentModal;
