import styled from 'styled-components';

export const HeroDetailsAtributes = styled.div`
  min-width: 300px;
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AtributesSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AtributesPortraitContainer = styled.div`
  width: 150px;
  height: 135px;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const SmallPortrait = styled.img`
  width: 150px;
  height: 84px;
`;

export const PortraitAttributesContainer = styled.div`
  width: 100px;
  height: 120px;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SingleAttributeContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 0px;
`;

export const AttributIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const AttributeValues = styled.div`
  color: #fff;
  font-family: Reaver, serif;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #000;
  margin-left: 12px;
`;

export const AttributeGain = styled.div`
  color: #999;
  font-size: 15px;
  text-shadow: 1px 1px 2px #000;
  margin-left: 8px;
  flex-grow: 1;
  text-align: right;
`;

export const HealthBar = styled.div`
  width: 150px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(to right, #286323, #7af03c);
  position: relative;
`;

export const HealthBarNumber = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-shadow: 1px 1px 2px #000;
  font-family: Radiance, sans-serif;
  font-weight: 800;
`;

export const ManaBar = styled.div`
  width: 150px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(to right, #1056db, #73f5fe);
  position: relative;
`;

export const ManaBarNumber = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-shadow: 1px 1px 2px #000;
  font-family: Radiance, sans-serif;
  font-weight: bold;
`;

export const DetailsHeader = styled.div`
  color: #969696;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px #000;
  margin-top: 12px;
`;
