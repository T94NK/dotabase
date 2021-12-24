import * as s from './RoleItem.styles';

interface IItem {
  title: string;
  width: number;
}

const RoleItem: React.FC<IItem> = ({title, width}) => (
  <s.RoleItem>
    <s.RoleName>{title}</s.RoleName>
    <s.RoleBarContainer>
      <s.RoleBarBg />
      <s.RoleBarField width={width}/>
    </s.RoleBarContainer>
  </s.RoleItem>
);

export default RoleItem;
