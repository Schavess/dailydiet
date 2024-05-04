import React from 'react';
import { Container, Content, StyledSectionList, SectionHeader } from './styles';

import { StyledItem } from '../StyledItem';

type Item = {
  id: string;
  hour: string;
  name: string;
  inDiet: boolean;
};

type Section = {
  title: string;
  data: Item[];
};

type Props = {
  sections: Section[];
};


export function SectionList({ sections }: Props) {
  return (
    <Container>
      <Content>
        <StyledSectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StyledItem name={item.name} hour={item.hour} inDiet={item.inDiet} />}
          renderSectionHeader={({ section }) => <SectionHeader>{section.title}</SectionHeader>}
        />

      </Content>
    </Container>
  );
};
