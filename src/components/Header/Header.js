import Link from 'next/link'; // link different pages or section
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={ {display: "flex", alignItems: "center", color: "white", marginBottom:"20px" } }>
          <DiCssdeck size="3rem" /> <Span>William Nguyen</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <NavLink><a href='https://drive.google.com/file/d/1QSgkPIBy2wt2KzNjUco3RE_SHEPFkRRo/view?usp=sharing' target='_blank'>Resume</a></NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nguyen-william93/" target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/william-nguyen-095435225/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
