import React from 'react';

import { ButtonFront, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my porfolio,
      </SectionTitle>
      <SectionText>
        Where dreams are realize one website at a time.
      </SectionText>
      <Button onClick={() => window.open("https://drive.google.com/file/d/1QSgkPIBy2wt2KzNjUco3RE_SHEPFkRRo/view?usp=sharing", "_blank")}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;