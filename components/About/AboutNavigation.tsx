import Link from 'next/link';
import React from 'react';
import cn from '@utils/classnames';
import styles from './AboutNavigation.module.css';

const AboutNavigation = ({ className = '' }: { className?: string }) => (
  <nav className={cn(className, styles.root)}>
    {Object.entries({
      legal: 'Legal',
      privacy: 'Privacy',
      credits: 'Credits',
    }).map(([slug, title]) => (
      <Link href={`/${slug}/`}>
        <a className={styles.item}>{title}</a>
      </Link>
    ))}
  </nav>
);

export default AboutNavigation;
