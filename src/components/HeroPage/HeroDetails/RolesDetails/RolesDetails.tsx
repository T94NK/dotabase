import { RoleItem } from './RoleItem';
import { DetailsRolesContainer, RolesList, DetailsHeader } from './RolesDetails.styles';

const roles = [
  { title: 'Основа', width: 20 },
  { title: 'Контроль', width: 65 },
  { title: 'Поддержка', width: 24 },
  { title: 'Лес', width: 60 },
  { title: 'Осада', width: 33 },
  { title: 'Быстрый урон', width: 92 },
  { title: 'Стойкость', width: 23 },
  { title: 'Инициация', width: 85 },
  { title: 'Побег', width: 24 },
];

const RolesDetails: React.FC = () => (
  <DetailsRolesContainer>
    <RolesList>
      {roles.map(({ title, width }) => (
        <RoleItem title={title} width={width} />
      ))}
    </RolesList>
    <DetailsHeader>Роли</DetailsHeader>
  </DetailsRolesContainer>
);

export default RolesDetails;
