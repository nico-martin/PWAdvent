import React from 'react';
import { Link } from 'react-router-dom';

import './FooterMenu.css';

const FooterMenu = ({ className = '' }: { className?: string }) => (
  <nav className={`${className} footer-menu`}>
    {Object.entries({ about: 'About', legal: 'Legal' }).map(([path, name]) => (
      <Link className="footer-menu__link" to={`/${path}/`}>
        {name}
      </Link>
    ))}
  </nav>
);

export default FooterMenu;
