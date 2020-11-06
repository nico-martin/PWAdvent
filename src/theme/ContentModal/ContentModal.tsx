import React from 'react';

import { CloseButton, Loader } from '../index';

import './ContentModal.css';

const ContentModal = ({
  title,
  children,
  onClose,
  className = '',
  loading = false,
}: {
  title: string;
  children?: React.JSX.Element | React.JSX.Element[] | string;
  onClose: Function;
  className?: string;
  loading?: boolean;
  [key: string]: any;
}) => {
  const active = true;
  const [shadow, setShadow] = React.useState<boolean>(false);

  return (
    <div
      className={`${className} content-modal ${
        active ? 'content-modal--visible' : ''
      }`}
    >
      <div className="content-modal__bkg" onClick={() => onClose()} />
      <main
        className="content-modal__inner"
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
