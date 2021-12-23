import { HeroTypes } from '../../../containers/types';
import { PortraitContainer, HeroMedia } from './HeroPortrait.styles';

interface IHeroName {
  heroName: string | any;
}

const HeroPortrait: React.FC<IHeroName> = ({ heroName }) => (
  <PortraitContainer>
    <HeroMedia
      src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroName.substring(
        14
      )}.webm`}
      autoPlay
      preload='auto'
      loop
      playsInline
    />
  </PortraitContainer>
);

export default HeroPortrait;
