import { Link } from 'gatsby';
import React from 'react';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

const Header = () => {
  const { logo, siteUrl } = useSiteMetadata();//, navLinks

  return (
    <>
      <nav
        className="db flex justify-between w-100 ph5-l"
        style={{ marginTop: '3rem' }}
      >
        <div className="dib w-25 v-mid">
        </div>
        <div className="dib w-75 v-mid tr">
        </div>
      </nav>
    </>
  );
};

export default Header;

/*
<nav
        className="db flex justify-between w-100 ph5-l"
        style={{ marginTop: '3rem' }}
      >
        <div className="dib w-25 v-mid">
          <Link to={siteUrl} className="link dim">
            <picture>
              <img className="dib w3 h3 br-100" alt="logo" src={logo} />
            </picture>
          </Link> 
        </div>
        <div className="dib w-75 v-mid tr">
          {navLinks.map((n, i) => (
            <a
              key={i}
              href={n.url}
              className="light-gray link dim f6 f5-l mr3 mr4-l"
            >
              {n.name}
            </a>
          ))}
        </div>
      </nav>
*/
