import { HeroDetailsBar, HeroDetailsBarContainer, VerticalSeparator } from './HeroDetails.styles';

import AttributeDetails from './AttributesDetails/AttributesDetails';
import { StatsDetails } from './StatsDetails';
import { RolesDetails } from './RolesDetails';

interface IHeroDetails {
  health: number;
  mana: number;
  name: string;
  str: number;
  agi: number;
  int: number;
  str_gain: number;
  int_gain: number;
  agi_gain: number;
  base_attack_min: number;
  base_attack_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  armor: number;
  mr: number;
  move_speed: number;
}

const HeroDetails: React.FC<IHeroDetails> = ({
  health,
  str,
  agi,
  int,
  name,
  mana,
  str_gain,
  int_gain,
  agi_gain,
  base_attack_min,
  base_attack_max,
  attack_rate,
  attack_range,
  projectile_speed,
  armor,
  mr,
  move_speed,
}) => (
  <HeroDetailsBarContainer>
    <HeroDetailsBar>
      <AttributeDetails
        name={name}
        health={health}
        str={str}
        int={int}
        agi={agi}
        mana={mana}
        str_gain={str_gain}
        int_gain={int_gain}
        agi_gain={agi_gain}
      />
      <VerticalSeparator />
      <StatsDetails
        base_attack_min={base_attack_min}
        base_attack_max={base_attack_max}
        attack_rate={attack_rate}
        attack_range={attack_range}
        projectile_speed={projectile_speed}
        armor={armor}
        mr={mr}
        move_speed={move_speed}
      />
      <VerticalSeparator />
      <RolesDetails />
    </HeroDetailsBar>
  </HeroDetailsBarContainer>
);

export default HeroDetails;
