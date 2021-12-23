import { RoleItem } from './RoleItem';
import { DetailsRolesContainer, RolesList, DetailsHeader } from './RolesDetails.styles';

const RolesDetails: React.FC = () => (
  <DetailsRolesContainer>
    <RolesList>
      <RoleItem title='Контроль' />
      <RoleItem title='Побег' />
      <RoleItem title='Поддержка' />
      <RoleItem title='Основа' />
      <RoleItem title='Лес' />
      <RoleItem title='Осада' />
      <RoleItem title='Стойкость' />
      <RoleItem title='Инициация' />
      <RoleItem title='Быстрый урон' />
    </RolesList>
    <DetailsHeader>Роли</DetailsHeader>
  </DetailsRolesContainer>
);

export default RolesDetails;
