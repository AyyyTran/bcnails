import React from 'react';
import Icon1 from '../../Images/svg-3.svg';
import Icon2 from '../../Images/svg-5.svg';
import Icon3 from '../../Images/svg-4.svg';
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
            We help reduce your fees and increase your overall
            revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Pedicures</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Acrylic</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5%
            cashback.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Gel</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5%
            cashback.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Nail Art</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5%
            cashback.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
