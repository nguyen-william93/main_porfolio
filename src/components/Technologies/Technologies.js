import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end to design
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Exprience with <br />
              React.js <br />
              HTML <br />
              CSS <br />
              Bootstrap <br />
              JavaScript <br />
              jQuery 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Exprience with <br />
              Node.js <br />
              MongoDB <br />
              SQL <br />
              NoSQL <br />
              GraphQL <br />
              Express.js <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>        
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Other</ListTitle>
            <ListParagraph>
              Exprience with <br />
              Bulma <br />
              Git <br />
              Github <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
