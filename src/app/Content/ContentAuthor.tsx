import React from 'react';
import { Author } from '@app/types';

import './ContentAuthor.css';

const linkList = {
  twitter: 'Twitter',
  devto: 'Dev.to',
  webdev: 'Web.dev',
};

const ContentAuthor = ({
  author,
  className = '',
  small = false,
}: {
  author: Author;
  className?: string;
  small?: boolean;
}) => {
  const links: Array<{
    title: string;
    link: string;
  }> = React.useMemo(
    () =>
      Object.entries(linkList)
        .map(([key, title]) =>
          key in author && author[key] !== ''
            ? {
                title,
                link: author[key],
              }
            : null
        )
        .filter(e => !!e),
    [author]
  );

  return (
    <div className={`content-author ${className}`}>
      {author.image.src !== '' && (
        <img
          className="content-author__image"
          alt={author.name}
          src={author.image.src}
          width={small ? 50 : author.image.width}
          height={small ? 50 : author.image.width}
        />
      )}
      <div className="content-author__about">
        <p className="content-author__name">
          {'personal' in author && author.personal !== '' ? (
            <a
              href={author.personal}
              target="_blank"
              className="content-author__name-link"
            >
              {author.name}
            </a>
          ) : (
            author.name
          )}
        </p>
        {links.length !== 0 && (
          <ul className="content-author__links">
            {links.map(({ title, link }) => (
              <li className="content-author__links-item">
                <a
                  target="_blank"
                  href={link}
                  className="content-author__links-link"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContentAuthor;
