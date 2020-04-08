import React from 'react';
import { Link } from 'gatsby';

import MainNav from './MainNav';

import { HeaderWrapper, Title } from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">
      <Title>{siteTitle}</Title>
    </Link>
    <MainNav />
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
