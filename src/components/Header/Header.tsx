import { HeaderContainer, Logo, HeroesLink } from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <Logo to='/' />
    <HeroesLink to='/'>HEROES</HeroesLink>
  </HeaderContainer>
);
export default Header;
