import * as s from './StatsDetails.styles';

import {
  HERO_STATS_ICON,
  ICON_DMG,
  ICON_ARMOR,
  ICON_ATTACK_RANGE,
  ICON_ATTACK_TIME,
  ICON_MAGIC_RESIST,
  ICON_MOVE_SPEED,
  ICON_PROJECTILE_SPEED,
  ICON_TURN_RATE,
  ICON_VISION,
} from '../../../../constants/api';

interface IStats {
  base_attack_min: number;
  base_attack_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  armor: number;
  mr: number;
  move_speed: number;
}

const StatsDetails: React.FC<IStats> = ({
  base_attack_min,
  base_attack_max,
  attack_rate,
  attack_range,
  projectile_speed,
  armor,
  mr,
  move_speed,
}) => (
  <s.DetailStats>
    <s.StatsList>
      <s.HeroValueSection>
        <s.HeroValueTitle>Атака</s.HeroValueTitle>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_DMG}.png`} />
          {base_attack_min} - {base_attack_max}
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_ATTACK_TIME}.png`} />
          {attack_rate}
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_ATTACK_RANGE}.png`} />
          {attack_range}
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_PROJECTILE_SPEED}.png`} />
          {projectile_speed}
        </s.HeroValueElement>
      </s.HeroValueSection>
      <s.HeroValueSection>
        <s.HeroValueTitle>Защита</s.HeroValueTitle>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_ARMOR}.png`} />
          {armor}
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_MAGIC_RESIST}.png`} />
          {mr}%
        </s.HeroValueElement>
      </s.HeroValueSection>
      <s.HeroValueSection>
        <s.HeroValueTitle>Мобильность</s.HeroValueTitle>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_MOVE_SPEED}.png`} />
          {move_speed}
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_TURN_RATE}.png`} />0
        </s.HeroValueElement>
        <s.HeroValueElement>
          <s.AttackTypeIcon src={`${HERO_STATS_ICON}${ICON_VISION}.png`} />0
        </s.HeroValueElement>
      </s.HeroValueSection>
    </s.StatsList>
    <s.DetailsHeader>Показатели</s.DetailsHeader>
  </s.DetailStats>
);

export default StatsDetails;
