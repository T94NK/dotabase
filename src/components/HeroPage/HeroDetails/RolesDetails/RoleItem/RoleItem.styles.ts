import styled from 'styled-components';

export const RoleItem = styled.div`
  width: 30%;
  height: 32px;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
`;

export const RoleName = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: left;
  color: #fff;
`;

export const RoleBarContainer = styled.div`
  width: 100%;
  height: 6px;
  max-height: 6px;
  flex-grow: 1;
  margin-top: 4px;
  position: relative;
`;

export const RoleBarBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4c4c4c;
  position: absolute;
  left: 0;
  top: 0;
`;

export const RoleBarField = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #fff;
  box-shadow: 0px 0px 10px #427ed1, 0px 0px 10px #427ed1;
  position: absolute;
  left: 0;
  top: 0;
  transition-property: width;
  transition-duration: 5s;
  transition-delay: 2s;
`;
