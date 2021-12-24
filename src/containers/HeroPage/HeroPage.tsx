import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { HeroTypes } from '../types';
import { BASE_URL, HEROES } from '../../constants/api';
import { HeroPageContainer } from './HeroPage.styles';
import { HeroPortrait } from '../../components/HeroPage/HeroPortrait';
import { HeroSummary } from '../../components/HeroPage/HeroSummary';
import PageVerticalBar from '../../components/HeroPage/VerticalBar/VerticalBar';
import { HeroDetails } from '../../components/HeroPage/HeroDetails';

const HeroPage: React.FC = () => {
  const [heroes, setHeroes] = useState<Array<HeroTypes>>([]);
  const [hero, setHero] = useState<HeroTypes | null>(null);
  const params = useParams();
  const { id } = params;

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    const heroStats = res;
    setHeroes(heroStats);
    return res;
  };

  useEffect(() => {
    getResource(BASE_URL + HEROES).then((item) => {
      const currentHero: HeroTypes = id ? item.find((i: HeroTypes) => i.id === +id) : {};
      setHero(currentHero);
    });
  }, []);

  if (hero === null) {
    return <div>Loading</div>;
  }

  return (
    <>
      <HeroPageContainer>
        <HeroPortrait heroName={hero.name} />
        <HeroSummary
          heroAttr={hero.primary_attr}
          heroLocalName={hero.localized_name}
          heroAttackType={hero.attack_type}
        />
        <PageVerticalBar
          heroAttr={hero.primary_attr}
          heroLocalName={hero.localized_name}
          heroId={hero.id}
        />
      </HeroPageContainer>
      <HeroDetails
        name={hero.name}
        health={hero.base_health}
        mana={hero.base_mana}
        str={hero.base_str}
        agi={hero.base_agi}
        int={hero.base_int}
        str_gain={hero.str_gain}
        agi_gain={hero.agi_gain}
        int_gain={hero.int_gain}
        base_attack_min={hero.base_attack_min}
        base_attack_max={hero.base_attack_max}
        attack_rate={hero.attack_rate}
        attack_range={hero.attack_range}
        projectile_speed={hero.projectile_speed}
        armor={hero.base_armor}
        mr={hero.base_mr}
        move_speed={hero.move_speed}
      />
    </>
  );
};

export default HeroPage;
