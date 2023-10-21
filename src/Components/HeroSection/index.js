import React, {useState} from 'react';
import Video from '../../Videos/video1.mp4';
import {Button} from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Temporarily Closed!</HeroH1>
        <HeroP>
          I am out of the country until mid December! I will be taking
          appointments when I am back. Feel free to message on Facebook to
          schedule them now!
        </HeroP>
        <HeroP>3-33323, South Fraser Way, Abbotsford, BC V2S 2B2</HeroP>
        {/* <HeroH1> New Shared Location!</HeroH1>
        <HeroP>
          We're teaming up with Emotion Rescue Hair to create a one-stop beauty
          destination! Located on South Fraser Way at Emotion Rescue Hair!
        </HeroP>
        <HeroP>3-33323, South Fraser Way, Abbotsford, BC V2S 2B2</HeroP> */}
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Book Now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
