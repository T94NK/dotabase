import { VerticalBar, HeroVerticalBarName, HeroId, VerticalBarLine } from './VerticalBar.styles';
import { getAttrImgName } from '../../../services/funcHelpers';
import { ATTR_ICON_URL } from '../../../constants/api';

interface IVerticalBar {
  heroLocalName: string;
  heroAttr: string;
  heroId: number | any;
}

const PageVerticalBar: React.FC<IVerticalBar> = ({ heroAttr, heroLocalName, heroId }) => (
  <VerticalBar>
    <img src={`${ATTR_ICON_URL}/${getAttrImgName(heroId)}.png`} alt={heroAttr} />
    <HeroVerticalBarName>{heroLocalName}</HeroVerticalBarName>
    <HeroId>{heroId}</HeroId>
    <VerticalBarLine />
  </VerticalBar>
);

export default PageVerticalBar;
