import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeroGridPage = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0px 20px;
  margin: 0 auto;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: calc(100% + 40px);
  min-height: 1500px;
  margin: 0 -20px;
  transition-property: height;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.1s;
  animation-iteration-count: 1;
`;
export const HeroNameContainer = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  bottom: -25px;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  transition-property: opacity, bottom;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  z-index: 3;
  opacity: 0;
  &:hover {
    opacity: 1;
    bottom: 0px;
  }
  background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%);
`;

export const HeroIcon = styled(NavLink)`
  width: 225px;
  height: 127px;
  margin: 0 10px 20px;
  box-shadow: 1px 1px 4px #000;
  filter: saturate(0.8);
  transition-property: transform, box-shadow, background-size, opacity, top, left;
  transition-timing-function: ease-out;
  transition-duration: 0.4s;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    box-shadow: 1px 1px 4px #000;
    background-size: 105%;
    filter: saturate(1);
    z-index: 4;
  }
`;

export const HeroImage = styled.img`
  width: inherit;
`;

export const HeroName = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Reaver', serif;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px;
  padding-bottom: 14px;
  padding-left: 0px;
  text-shadow: 0px 0px 4px #000;
`;
export const AttrImg = styled.img`
  width: 42px;
  height: 42px;
  padding: 8px;
  filter: drop-shadow(0px 0px 4px black);
`;
