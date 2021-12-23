import styled from 'styled-components';

export const DetailStats = styled.div`
  min-width: 400px;
  width: 30%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HeroValueSection = styled.div`
  width: 30%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const HeroValueTitle = styled.div`
  margin-left: 8px;
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #969696;
  margin-bottom: 4px;
`;
export const HeroValueElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
  font-size: 16px;
  text-align: left;
`;

export const AttackTypeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const DetailsHeader = styled.div`
  color: #969696;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px #000;
  margin-top: 12px;
`;
