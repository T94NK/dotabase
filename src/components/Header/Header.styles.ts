import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  padding: 0px 30px;
  background-color: #000;
  position: relative;
  background: inherit;
`;

export const Logo = styled(NavLink)`
  width: 200px;
  min-width: 200px;
  height: 50px;
  min-height: 50px;
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.8;
  margin-right: 40px;
`;

export const HeroesLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 3px;
  text-decoration: none;
  opacity: 0.8;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 0px;
  margin: 0px 20px;
  text-transform: uppercase;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid #ff6046;
    opacity: 1;
  }
`;
