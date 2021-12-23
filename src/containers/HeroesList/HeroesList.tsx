import React, { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { HeroTypes } from '../types';
import { BASE_URL, HEROES, ATTR_ICON_URL, IMG_BASE_URL } from '../../constants/api';
import * as s from './HeroesList.styles';

const HeroesList: React.FC = () => {
  const [heroes, setHeroes] = useState<Array<HeroTypes>>([]);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    const heroesList = res;
    setHeroes(heroesList);
  };

  useEffect(() => {
    getResource(BASE_URL + HEROES);
  }, []);
  const getAttrImgName = (attr: string) => {
    if (attr === 'agi') return 'hero_agility';
    if (attr === 'str') return 'hero_strength';
    return 'hero_intelligence';
  };

  return (
    <s.HeroGridPage>
      <s.Wrapper>
        {heroes.map((hero) => (
          <s.HeroIcon to={`/hero/${hero.id}`} key={hero.id}>
            <s.HeroImage src={`${IMG_BASE_URL}${hero.name.substring(14)}.png`} alt='' />
            <s.HeroNameContainer>
              <span>
                <s.AttrImg
                  src={`${ATTR_ICON_URL}/${getAttrImgName(hero.primary_attr)}.png`}
                  alt={hero.primary_attr}
                />
              </span>
              <s.HeroName>{hero.localized_name}</s.HeroName>
            </s.HeroNameContainer>
          </s.HeroIcon>
        ))}
      </s.Wrapper>
    </s.HeroGridPage>
  );
};

export default HeroesList;
