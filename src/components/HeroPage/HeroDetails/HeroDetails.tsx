import { HeroDetailsBar, HeroDetailsBarContainer, VerticalSeparator } from './HeroDetails.styles';

import AttributeDetails from './AttributesDetails/AttributesDetails';
import { StatsDetails } from './StatsDetails';
import { RolesDetails } from './RolesDetails';

interface IHeroDetails {
  health: number;
  mana: number;
  name: string;
  str: number;
  agi: number | any;
  int: number;
  str_gain: number | any;
  int_gain: number | any;
  agi_gain: number | any;
  base_attack_min: number | any;
  base_attack_max: number | any;
  attack_rate: number | any;
  attack_range: number | any;
  projectile_speed: number | any;
  armor: number | any;
  mr: number | any;
  move_speed: number | any;
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
