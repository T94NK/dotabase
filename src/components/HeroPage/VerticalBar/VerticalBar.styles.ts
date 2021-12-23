import styled from 'styled-components';

export const VerticalBar = styled.div`
  width: 800px;
  height: 50px;
  position: absolute;
  left: 100px;
  bottom: 80px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-name: heropage_verticalBarIn_2Wsyr;
  transform: rotate(270deg);
  transform-origin: bottom left;
`;
export const HeroVerticalBarName = styled.div`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: Reaver, serif;
  font-size: 23px;
  font-weight: 600;
  margin-left: 12px;
`;

export const HeroId = styled.div`
  color: #888;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 22px;
  margin-left: 10px;
  transform: translateY(-2px);
`;

export const VerticalBarLine = styled.div`
  flex-grow: 1;
  height: 5px;
  background-color: #555;
  margin: 0px 8px 3px 8px;
`;
