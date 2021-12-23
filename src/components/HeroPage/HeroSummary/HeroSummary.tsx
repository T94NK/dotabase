import {
  HeroSummaryContainer,
  HeroTypeTitle,
  HeroTypeTitleImg,
  HeroAttr,
  HeroName,
  AttackTypeTitle,
  AttackTypeDetail,
  AttackTypeIcon,
  AttackTypeValue,
} from './HeroSummary.styles';
import { ATTR_ICON_URL } from '../../../constants/api';
import { getAttrImgName, getAttrRusName } from '../../../services/funcHelpers';

interface IHero {
  heroAttr: string;
  heroLocalName: string;
  heroAttackType: string;
}

const HeroSummary: React.FC<IHero> = ({ heroAttr, heroLocalName, heroAttackType }) => (
  <HeroSummaryContainer>
    <HeroTypeTitle>
      <HeroTypeTitleImg src={`${ATTR_ICON_URL}/${getAttrImgName(heroAttr)}.png`} />
      <HeroAttr>{getAttrRusName(heroAttr)}</HeroAttr>
    </HeroTypeTitle>
    <HeroName>{heroLocalName}</HeroName>
    <AttackTypeTitle>Тип Атаки</AttackTypeTitle>
    <AttackTypeDetail>
      <AttackTypeIcon
        src={`${ATTR_ICON_URL}/${heroAttackType.toLowerCase()}.svg`}
        alt={heroAttackType}
      />
      <AttackTypeValue>{heroAttackType}</AttackTypeValue>
    </AttackTypeDetail>
  </HeroSummaryContainer>
);

export default HeroSummary;
