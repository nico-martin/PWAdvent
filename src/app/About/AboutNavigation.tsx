import React from 'react';
import { Link } from 'react-router-dom';

import cn from '@utils/classnames';

import './AboutNavigation.css';

const AboutNavigation = ({ className = '' }: { className?: string }) => (
  <nav className={cn(className, 'about-navigation')}>
    {Object.entries({
      legal: 'Legal',
      privacy: 'Privacy',
      techstack: 'Tech',
    }).map(([slug, title]) => (
      <Link className="about-navigation__item" to={`/${slug}/`}>
        {title}
      </Link>
    ))}
  </nav>
);

export default AboutNavigation;
