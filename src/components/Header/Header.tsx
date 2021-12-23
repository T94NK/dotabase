import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, HeroesLink } from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <Logo to='/heroes' />
    <HeroesLink to='/heroes'>HEROES</HeroesLink>
  </HeaderContainer>
);
export default Header;
