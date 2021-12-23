import styled from 'styled-components';

export const HeroDetailsBarContainer = styled.div`
  width: 100%;
  height: 30vh - 90px;
  min-height: 221px;
  background: linear-gradient(80deg, #252728 0%, #101415 100%);
  border-top: 2px solid #282828;
  border-bottom: 2px solid #2c2e2e;
  box-shadow: 0px 0px 8px #000;
  display: flex;
  justify-content: center;
  z-index: 2;
  margin-top: -15px;
`;

export const HeroDetailsBar = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 20px 0px;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeroDetailsAtributes = styled.div`
  min-width: 300px;
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &::after {
    content: '';
    width: 100%;
    height: 80%;
    background-color: #4f4f4f;
  }
`;





export const AttackTypeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
