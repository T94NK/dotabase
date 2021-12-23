import styled from 'styled-components';

export const HeroSummaryContainer = styled.div`
  margin-top: 100px;
  margin-left: 30px;
  width: 35%;
  height: calc(90% - 100px);
  min-height: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

export const HeroTypeTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeroTypeTitleImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const HeroAttr = styled.div`
  margin-left: 6px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 22px;
`;

export const HeroName = styled.div`
  margin-top: 12px;
  font-family: Reaver, serif;
  line-height: 110%;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
`;

export const AttackTypeTitle = styled.div`
  margin-top: 30px;
  color: #959595;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 17px;
`;

export const AttackTypeDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const AttackTypeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const AttackTypeValue = styled.div`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  font-weight: bold;
`;