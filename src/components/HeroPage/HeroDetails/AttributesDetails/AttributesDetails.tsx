import * as s from './AttributesDetails.styles';

import {
  IMG_BASE_URL,
  ATTR_ICON_URL,
  ATTR_AGI,
  ATTR_INT,
  ATTR_STR,
} from '../../../../constants/api';

interface IAttributesDetails {
  name: string;
  health: number;
  mana: number;
  str: number;
  agi: number;
  int: number;
  str_gain: number;
  int_gain: number;
  agi_gain: number;
}

const AttributesDetails: React.FC<IAttributesDetails> = ({
  name,
  health,
  str,
  int,
  agi,
  mana,
  str_gain,
  int_gain,
  agi_gain,
}) => (
  <s.HeroDetailsAtributes>
    <s.AtributesSection>
      <s.AtributesPortraitContainer>
        <s.SmallPortrait src={`${IMG_BASE_URL}${name.substring(14)}.png`} />
        <s.HealthBar>
          <s.HealthBarNumber>{health + str * 20}</s.HealthBarNumber>
        </s.HealthBar>
        <s.ManaBar>
          <s.ManaBarNumber>{mana + int * 14}</s.ManaBarNumber>
        </s.ManaBar>
      </s.AtributesPortraitContainer>

      <s.PortraitAttributesContainer>
        <s.SingleAttributeContainer>
          <s.AttributIcon src={`${ATTR_ICON_URL}/${ATTR_AGI}.png`} />
          <s.AttributeValues>{agi}</s.AttributeValues>
          <s.AttributeGain>+{agi_gain}</s.AttributeGain>
        </s.SingleAttributeContainer>
        <s.SingleAttributeContainer>
          <s.AttributIcon src={`${ATTR_ICON_URL}/${ATTR_INT}.png`} />
          <s.AttributeValues> {int} </s.AttributeValues>
          <s.AttributeGain>+{int_gain}</s.AttributeGain>
        </s.SingleAttributeContainer>
        <s.SingleAttributeContainer>
          <s.AttributIcon src={`${ATTR_ICON_URL}/${ATTR_STR}.png`} />
          <s.AttributeValues>{str}</s.AttributeValues>
          <s.AttributeGain>+{str_gain}</s.AttributeGain>
        </s.SingleAttributeContainer>
      </s.PortraitAttributesContainer>
    </s.AtributesSection>
    <s.DetailsHeader>Атрибуты</s.DetailsHeader>
  </s.HeroDetailsAtributes>
);

export default AttributesDetails;
