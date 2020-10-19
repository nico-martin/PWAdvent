import React from 'react';
import ReactDOM from 'react-dom';
import './ShadowBox.css';

const Portal = ({ children }: { children?: React.JSX.Element }) =>
  ReactDOM.createPortal(children, document.querySelector('#shadowbox'));

export default ({
  children,
  close,
}: {
  children?: React.JSX.Element | React.JSX.Element[];
  close: Function;
}) => {
  const [show, setShow] = React.useState<boolean>(false);

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
    <Portal>
      <div className="shadowbox" data-visible={show}>
        <div className="shadowbox__shadow" onClick={onClose} />
        <div className="shadowbox__box">
          <button className="shadowbox__close" onClick={onClose}>
            Close
          </button>
          <div className="shadowbox__content">{children}</div>
        </div>
      </div>
    </Portal>
  );
};
