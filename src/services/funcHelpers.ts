/* eslint-disable no-param-reassign */
export const getAttrImgName = (attr: string) => {
  if (attr === 'agi') return 'hero_agility';
  if (attr === 'str') return 'hero_strength';
  return 'hero_intelligence';
};

export const getAttrRusName = (attr: string) => {
  if (attr === 'agi') return 'Ловкость';
  if (attr === 'str') return 'Сила';
  return 'Интелект';
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const randomWidth = getRandomInt(1, 100);
