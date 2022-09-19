import React from 'react';
import Icon1 from '../../Images/svg-3.svg';
import Icon2 from '../../Images/svg-5.svg';
import Icon3 from '../../Images/svg-4.svg';
import Icon4 from '../../Images/svg-11.svg';
import Icon5 from '../../Images/svg-10.svg';
import Icon6 from '../../Images/svg-12.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
const Services = () => {
  return (
    <ServicesContainer id={'services'}>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Manicures</ServicesH2>
          <ServicesP>
            A beauty treatment of the hands. Your nails will be cut, filed, and
            shaped!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Pedicures</ServicesH2>
          <ServicesP>
            Trimming, shaping and tending to your toenails. Exfoliating, hydrating and massaging of
            feet.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Acrylic Nails</ServicesH2>
          <ServicesP>Acrylic nails are extensions placed over fingernails for aesthetic look.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Gel Nails</ServicesH2>
          <ServicesP>Powder gel nails through full sets, fills etc.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Nail Art</ServicesH2>
          <ServicesP>Beautiful nail art based on what you desire!</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Massages</ServicesH2>
          <ServicesP>Half hour massages on either hands or feet.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
