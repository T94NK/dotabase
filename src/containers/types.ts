export interface HeroTypes {
  id: number;
  name: string;
  localized_name: string;
  legs: number;
  primary_attr: string;
  attack_type: string;
  roles: Array<string>;
  base_agi: number;
  base_str: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  base_health: number;
  base_mana: number;
  base_attack_min: number;
  base_attack_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  base_armor: number;
  base_mr: number;
  move_speed: number;
}
