import React from 'react';
import { Author } from '@app/types';
import cn from '@utils/classnames';
import styles from './ContentAuthor.module.css';

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
        .filter((e) => !!e),
    [author]
  );

  return (
    <div className={cn(styles.root, className)}>
      {author.image.src !== '' && (
        <img
          className={cn(styles.image)}
          alt={author.name}
          src={author.image.src}
          width={small ? 50 : author.image.width}
          height={small ? 50 : author.image.width}
        />
      )}
      <div className={cn(styles.about)}>
        <p className={cn(styles.name)}>
          {'personal' in author && author.personal !== '' ? (
            <a href={author.personal} target="_blank">
              {author.name}
            </a>
          ) : (
            author.name
          )}
        </p>
        {links.length !== 0 && (
          <ul className={cn(styles.links)}>
            {links.map(({ title, link }) => (
              <li className={cn(styles.linksItem)}>
                <a target="_blank" href={link} className={cn(styles.linksItem)}>
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
