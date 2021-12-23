import * as s from './RoleItem.styles';

interface IItem {
  title: string;
}

const RoleItem: React.FC<IItem> = ({title}) => (
  <s.RoleItem>
    <s.RoleName>{title}</s.RoleName>
    <s.RoleBarContainer>
      <s.RoleBarBg />
      <s.RoleBarField width={50}/>
    </s.RoleBarContainer>
  </s.RoleItem>
);

export default RoleItem;
